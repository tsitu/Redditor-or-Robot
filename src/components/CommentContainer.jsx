import React from "react";

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
            isLoading: true
        };

        this.reloadComments = this.reloadComments.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onGoldButtonClick = this.onGoldButtonClick.bind(this);
        this.onColdButtonClick = this.onColdButtonClick.bind(this);
    }

    componentWillMount() {
        // getHot('all').then(value => {
        //     hotSubmissions = value;
        //     console.log(hotSubmissions);
        // }, reason => {
        //     console.log(reason);
        // });

        getUser('China_SS').then(value => {
            ssComments = value;
            console.log(ssComments);
        }, reason => {
            console.log(reason);
        });
    }

    reloadComments() {
        //
    }

    handleUpdate() {
        if (!hotSubmissions) {
            console.log("Null hotSubmissions, please refresh.");
            return null;
        }
        const randomSubmission = hotSubmissions[getRandom(hotSubmissions.length - 1)];
        const randomComment = randomSubmission.comments[getRandom(randomSubmission.comments.length - 1)];
        if (randomSubmission.gilded > 0) {
            console.log(randomSubmission.gilded + " gold on post: " + randomSubmission.id);
        }
        if (randomComment.gilded > 0) {
            console.log(randomComment.gilded + " gold on comment: " + randomComment.id);
        }
        this.setState({
            text: SnuOwnd.getParser().render(randomComment.body),
            // text: value.comments[0].body,
            isLoading: false
        });
    }

    onGoldButtonClick() {
        this.setState({
            text: '',
            isLoading: true
        });
        this.handleUpdate();
    }

    onColdButtonClick() {
        //componentWillMount();
    }

    render() {
        const img = this.state.isLoading ? <div> <br /> <LoadingSpinner /> </div> :
                    <div id="dangerousHTML" dangerouslySetInnerHTML={{__html: this.state.text}} />
        return (
            <div id="commentContainer">
                {/*{this.state.text} <br /> <br />*/}
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
            <button type="button" id="goldButton" onClick={this.handleClick}>🏆</button>
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
            <button type="button" id="coldButton" onClick={this.handleClick}>❄️</button>
        );
    }
}

module.exports = CommentContainer;