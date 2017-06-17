import React from "react";

class NavHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> /r/{this.props.subreddit} : {this.props.type} <br /> <br /> </div>
        );
    }
}

module.exports = NavHeader;