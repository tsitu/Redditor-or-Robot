import React from "react";

class NavHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let heartLives = null;
        switch (this.props.numLives) {
            case 0:
                heartLives = 'Game Over!';
                break;
            case 1:
                heartLives = '💖';
                break;
            case 2:
                heartLives = '💖💖';
                break;
            case 3:
                heartLives = '💖💖💖';
                break;
        }
        return (
            <div>
                <table id="navTable">
                    <tbody>
                        <tr>
                            <td>/u/dev</td>
                            <td>Score: {this.props.score}</td>
                            <td>/r/{this.props.subreddit}</td>
                            <td>{heartLives}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = NavHeader;