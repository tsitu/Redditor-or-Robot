import React from "react";

import NavHeader from "./NavHeader.jsx";
import CommentContainer from "./CommentContainer.jsx";

import { getHot, getUser, getRandom } from "../utils/api.js";
import ssBotList from "../utils/ssbotlist.js";
import SnuOwnd from "../utils/snuownd.js";

let hotSubmissions = null;
let ssComments = null;

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isLoading: true,
            subredditName: '',
            userType: ''
        };

        this.reloadComments = this.reloadComments.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onHumanButtonClick = this.onHumanButtonClick.bind(this);
        this.onRoboButtonClick = this.onRoboButtonClick.bind(this);
    }

    componentWillMount() {
        this.reloadComments();
    }

    reloadComments() {
        const randomSS = ssBotList[getRandom(ssBotList.length)];
        this.setState({
            subredditName: randomSS.subreddit,
            userType: ''
        });

        getHot(randomSS.subreddit).then(value => {
            hotSubmissions = value;
            console.log(hotSubmissions);
        }, reason => {
            console.log(reason);
        });

        getUser(randomSS.username).then(value => {
            ssComments = value;
            console.log(ssComments);
        }, reason => {
            console.log(reason);
        });
    }

    handleUpdate() {
        if (!hotSubmissions || !ssComments) {
            console.log("Null object[s], please refresh.");
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

    onHumanButtonClick() {
        this.setState({
            text: '',
            isLoading: true
        });
        this.handleUpdate();
    }

    onRoboButtonClick() {
        this.setState({
            text: '',
            isLoading: true
        });
        this.reloadComments();
    }

    render() {
        return (
            <div id="gameContainer">
                <NavHeader type={this.state.userType} subreddit={this.state.subredditName} />
                <HumanButton onButtonClick={this.onHumanButtonClick} /> &nbsp;
                <RoboButton onButtonClick={this.onRoboButtonClick} /> <br /> <br />
                <CommentContainer text={this.state.text} isLoading={this.state.isLoading} />
            </div>
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
        this.props.onButtonClick();
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
        this.props.onButtonClick();
    }

    render() {
        return (
            <button type="button" id="roboButton" onClick={this.handleClick}>🤖</button>
        );
    }
}

module.exports = GameContainer;