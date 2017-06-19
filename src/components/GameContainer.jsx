import React from "react";

import NavHeader from "./NavHeader.jsx";
import CommentContainer from "./CommentContainer.jsx";

import { getHot, getUser, getRandom } from "../utils/api.js";
import ssBotList from "../utils/ssbotlist.js";
import commonBotList from "../utils/commonbotlist.js";
import SnuOwnd from "../utils/snuownd.js";

// Globals
let hotSubmissions = null;
let ssComments = null;
let lifeTracker = null;
let ssBotListCopy = null;
let congratsThreshold = null;
let reloadThreshold = null;
let incorrectAnswers = null;
let randomComment = null;
let randomSubmission = null;

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
            gameOver: false,
            isGoodJob: false,
            isWrongAnswer: false,
            isCongrats: false
        };

        this.reloadComments = this.reloadComments.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onResetButtonClick = this.onResetButtonClick.bind(this);
        this.onGameButtonClick = this.onGameButtonClick.bind(this);

        lifeTracker = 3;
        ssBotListCopy = ssBotList;
        congratsThreshold = 266;
        reloadThreshold = 22;
        incorrectAnswers = [];
    }

    componentDidMount() {
        this.reloadComments();
    }

    componentDidUpdate() {
        if (lifeTracker && (lifeTracker != this.state.numLives)) {
            lifeTracker = this.state.numLives;
            this.reloadComments();
        }

        // console.log("ssBotListCopy: " + ssBotListCopy.length + ", hotSubmissions: " + hotSubmissions.length + ", ssComments: " + ssComments.length);
    }

    reloadComments() {
        if (this.state.numLives <= 0) {
            this.setState({
                gameOver: true
            });
            return;
        }

        if (ssBotListCopy.length < congratsThreshold) {
            this.setState({
                gameOver: true,
                isCongrats: true
            })
            return;
        }

        const randomSS = ssBotListCopy[getRandom(ssBotListCopy.length)];
        ssBotListCopy = ssBotListCopy.filter(el => {
            return el.subreddit !== randomSS.subreddit; // Filter out seen subreddits
        });

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

        Promise.all(apiCalls).then(() => {
            this.setState({
                isGoodJob: false,
                isWrongAnswer: false
            });
            this.handleUpdate();
        });
    }

    handleUpdate() {
        if (!hotSubmissions || !ssComments) {
            console.log("Null object[s], please refresh");
            return;
        }

        if (hotSubmissions.length === reloadThreshold || ssComments.length === reloadThreshold) {
            this.setState({
                text: '',
                isLoading: true,
                isGoodJob: true
            });
            this.reloadComments();
            return;
        }

        const roll = getRandom(2);

        if (roll === 0) {
            randomSubmission = hotSubmissions[getRandom(hotSubmissions.length)];
            randomComment = randomSubmission.comments[getRandom(randomSubmission.comments.length)];
            hotSubmissions = hotSubmissions.filter(el => {
                return el.id !== randomSubmission.id; // Filter out seen submissions
            });

            if (!randomComment) {
                this.handleUpdate();
                return;
            }

            if (commonBotList.indexOf(randomComment.author.name) > -1) {
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
            randomComment = ssComments[getRandom(ssComments.length)];
            ssComments = ssComments.filter(el => {
                return el.id !== randomComment.id; // Filter out seen comments
            });

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

        if (this.state.isLoading === true) {
            console.log("I'm loadin' fool!");
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
                numLives: this.state.numLives - 1,
                isWrongAnswer: true
            });

            // Add precise comment permalink
            let urlBuild = null;
            if (randomComment.link_permalink) {
                urlBuild = randomComment.link_permalink + randomComment.id;
            }
            else {
                urlBuild = "https://reddit.com" + randomSubmission.permalink + randomComment.id;
            }
            incorrectAnswers.push({
                url: urlBuild,
                id: randomComment.id,
                user: randomComment.author.name
            });
            //console.log(incorrectAnswers);
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
                    isCongrats = {this.state.isCongrats}
                    onResetButtonClick = {this.onResetButtonClick}
                    onGameButtonClick = {this.onGameButtonClick}
                    incorrectAnswers = {incorrectAnswers} />
            </div> :
            <div>
                <ButtonContainer
                    gameOver = {this.state.gameOver}
                    onResetButtonClick = {this.onResetButtonClick}
                    onGameButtonClick = {this.onGameButtonClick} />
                <CommentContainer
                    text = {this.state.text}
                    isLoading = {this.state.isLoading}
                    isGoodJob = {this.state.isGoodJob}
                    isWrongAnswer = {this.state.isWrongAnswer} />
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
        let incorrectAnswersDisplay = null;
        if (this.props.gameOver && this.props.incorrectAnswers) {
            const c = this.props.incorrectAnswers;
            switch(c.length) {
                case 0:
                    incorrectAnswersDisplay = '';
                    break;
                case 1:
                    incorrectAnswersDisplay =
                        <div>
                            😔 <br />
                            <a href={c[0].url} target="_blank">{c[0].user}: {c[0].id}</a>
                        </div>
                    break;
                case 2:
                    incorrectAnswersDisplay =
                        <div>
                            😔 <br />
                            <a href={c[0].url} target="_blank">{c[0].user}: {c[0].id}</a> <br />
                            <a href={c[1].url} target="_blank">{c[1].user}: {c[1].id}</a>
                        </div>
                    break;
                case 3:
                    incorrectAnswersDisplay =
                        <div>
                            😔 <br />
                            <a href={c[0].url} target="_blank">{c[0].user}: {c[0].id}</a> <br />
                            <a href={c[1].url} target="_blank">{c[1].user}: {c[1].id}</a> <br />
                            <a href={c[2].url} target="_blank">{c[2].user}: {c[2].id}</a>
                        </div>
                    break;
            }
        }
        const congrats = this.props.isCongrats ? <div> Congratulations! <br /> </div> : ''
        const buttons = this.props.gameOver ?
            <div>
                Play Again? <br /> <br />
                <ResetButton onButtonClick = {this.props.onResetButtonClick} /> <br /> <br />
                {incorrectAnswersDisplay}
            </div> :
            <div>
                <HumanButton onButtonClick = {this.props.onGameButtonClick} /> &nbsp;
                <RoboButton onButtonClick = {this.props.onGameButtonClick} />
            </div>

        return (
            <div>
                {congrats}
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