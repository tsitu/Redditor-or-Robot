import React from "react";

import NavHeader from "./NavHeader.jsx";
import CommentContainer from "./CommentContainer.jsx";

import { getHot, getUser, getRandom } from "../utils/api.js";
import ssBotList from "../utils/ssbotlist.js";
import SnuOwnd from "../utils/snuownd.js";

let hotSubmissions = null;
let ssComments = null;
let lifeTracker = 3;

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isLoading: true,
            subredditName: '',
            userType: '',
            numLives: 3,
            score: 0,
            gameOver: false
        };

        this.reloadComments = this.reloadComments.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onResetButtonClick = this.onResetButtonClick.bind(this);
        this.onGameButtonClick = this.onGameButtonClick.bind(this);
    }

    componentDidMount() {
        this.reloadComments();
    }

    componentDidUpdate() {
        if (lifeTracker != this.state.numLives) {
            lifeTracker = this.state.numLives;
            this.reloadComments();
        }
    }

    reloadComments() {
        if (this.state.numLives <= 0) {
            this.setState({
                gameOver: true
            });
            return;
        }

        const randomSS = ssBotList[getRandom(ssBotList.length)];
        this.setState({
            subredditName: randomSS.subreddit,
            userType: ''
        });

        const hotPromise = getHot(randomSS.subreddit).then(value => {
            hotSubmissions = value;
            console.log(hotSubmissions);
        }, reason => {
            console.log(reason);
        });

        const userPromise = getUser(randomSS.username).then(value => {
            ssComments = value;
            console.log(ssComments);
        }, reason => {
            console.log(reason);
        });

        const apiCalls = [];
        apiCalls.push(hotPromise);
        apiCalls.push(userPromise);

        Promise.all(apiCalls).then(() => this.handleUpdate());
    }

    handleUpdate() {
        if (!hotSubmissions || !ssComments) {
            console.log("Null object[s], please refresh");
            return;
        }

        const roll = getRandom(2);

        if (roll === 0) {
            const randomSubmission = hotSubmissions[getRandom(hotSubmissions.length)];
            const randomComment = randomSubmission.comments[getRandom(randomSubmission.comments.length)];

            if (!randomComment) {
                this.handleUpdate();
                return;
            }

            if (randomSubmission.gilded > 0) {
                console.log(randomSubmission.gilded + " gold on post: " + randomSubmission.id);
            }

            if (randomComment.gilded > 0) {
                console.log(randomComment.gilded + " gold on comment: " + randomComment.id);
            }

            this.setState({
                text: SnuOwnd.getParser().render(randomComment.body),
                isLoading: false,
                userType: 'human'
            });
        }
        else if (roll === 1) {
            const randomComment = ssComments[getRandom(ssComments.length)];

            if (randomComment.gilded > 0) {
                console.log(randomComment.gilded + " gold on comment: " + randomComment.id);
            }

            this.setState({
                text: SnuOwnd.getParser().render(randomComment.body),
                isLoading: false,
                userType: 'robot'
            });
        }
    }

    onResetButtonClick() {
        this.props.onResetButtonClick();
    }

    onGameButtonClick(type) {
        if (!hotSubmissions || !ssComments) {
            console.log("Null object[s], please refresh");
            return;
        }

        this.setState({
            text: '',
            isLoading: true
        });

        if (this.state.userType == type) {
            this.setState({
                score: this.state.score + 1
            });
            this.handleUpdate();
        }
        else if (this.state.userType != type) {
            this.setState({
                numLives: this.state.numLives - 1
            });
        }
        else {
            console.log("Shenanigans in GameButtonClick");
            return;
        }
    }

    render() {
        const buttonCommentContainer = this.state.gameOver ?
            <div>
                <ButtonContainer
                    gameOver = {this.state.gameOver}
                    onResetButtonClick = {this.onResetButtonClick}
                    onGameButtonClick = {this.onGameButtonClick} />
            </div> :
            <div>
                <ButtonContainer
                    gameOver = {this.state.gameOver}
                    onResetButtonClick = {this.onResetButtonClick}
                    onGameButtonClick = {this.onGameButtonClick} />
                <CommentContainer
                    text = {this.state.text}
                    isLoading = {this.state.isLoading} />
            </div>

        return (
            <div id="gameContainer">
                <NavHeader
                    gameOver = {this.state.gameOver}
                    score = {this.state.score}
                    subreddit = {this.state.subredditName}
                    numLives = {this.state.numLives} /> <br />
                {buttonCommentContainer}
            </div>
        );
    }
}

class ButtonContainer extends React.Component {
    render() {
        const buttons = this.props.gameOver ?
            <div>
                Play Again? <br /> <br />
                <ResetButton onButtonClick = {this.props.onResetButtonClick} />
            </div> :
            <div>
                <HumanButton onButtonClick = {this.props.onGameButtonClick} /> &nbsp;
                <RoboButton onButtonClick = {this.props.onGameButtonClick} />
            </div>

        return (
            <div>
                {buttons}
            </div>
        );
    }
}

class ResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onButtonClick();
    }

    render() {
        return (
            <button type="button" id="resetButton" onClick={this.handleClick}>🕹️</button>
        );
    }
}

class HumanButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onButtonClick('human');
    }

    render() {
        return (
            <button type="button" id="humanButton" onClick={this.handleClick}>🤓</button>
        );
    }
}

class RoboButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onButtonClick('robot');
    }

    render() {
        return (
            <button type="button" id="roboButton" onClick={this.handleClick}>🤖</button>
        );
    }
}

module.exports = GameContainer;