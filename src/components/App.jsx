import React from "react";

import GameContainer from "./GameContainer.jsx";
import LoginContainer from "./LoginContainer.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: () => <GameContainer onResetButtonClick={this.resetGame} />
        };

        this.resetGame = this.resetGame.bind(this);
    }

    resetGame() {
        this.setState({
            game: () => <GameContainer onResetButtonClick={this.resetGame} />
        });
    };

    render() {
        const ActiveGame = this.state.game;
        return (
            <div>
                <LoginContainer />
                {/*<ActiveGame />*/}
            </div>
        );
    }
}

module.exports = App;