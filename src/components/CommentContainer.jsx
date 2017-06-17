import React from "react";

import NavHeader from "./NavHeader.jsx";

import { getHot, getUser, getRandom } from "../utils/api.js";
import ssBotList from "../utils/ssbotlist.js";
import SnuOwnd from "../utils/snuownd.js";

let hotSubmissions = null;
let ssComments = null;

class CommentContainer extends React.Component {
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
        this.onGoldButtonClick = this.onGoldButtonClick.bind(this);
        this.onColdButtonClick = this.onColdButtonClick.bind(this);
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
                // text: value.comments[0].body,
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

    onGoldButtonClick() {
        this.setState({
            text: '',
            isLoading: true
        });
        this.handleUpdate();
    }

    onColdButtonClick() {
        this.setState({
            text: '',
            isLoading: true
        });
        this.reloadComments();
    }

    render() {
        const img = this.state.isLoading ? <div> <br /> <LoadingSpinner /> </div> :
                    <div id="dangerousHTML" dangerouslySetInnerHTML={{__html: this.state.text}} />
        return (
            <div id="commentContainer">
                {/*{this.state.text} <br /> <br />*/}
                <NavHeader type={this.state.userType} subreddit={this.state.subredditName} />
                <GoldButton onButtonClick={this.onGoldButtonClick} /> &nbsp;
                <ColdButton onButtonClick={this.onColdButtonClick} /> <br /> <br />
                {img}
            </div>
        );
    }
}

class LoadingSpinner extends React.Component {
    render() {
        return (
            <img src="../../assets/spinner.gif" alt="Spinner" height="42" width="42" />
        );
    }
}

class GoldButton extends React.Component {
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
            <button type="button" id="goldButton" onClick={this.handleClick}>🤓</button>
        );
    }
}

class ColdButton extends React.Component {
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
            <button type="button" id="coldButton" onClick={this.handleClick}>🤖</button>
        );
    }
}

module.exports = CommentContainer;