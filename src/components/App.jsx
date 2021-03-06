/* @flow */

import React from 'react';

import GameContainer from './GameContainer';
import LoginContainer from './LoginContainer';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      game: () => <LoginContainer onPlayButtonClick={this.resetGame} />,
    };

    this.resetGame = this.resetGame.bind(this);
  }

  state: {
    game: Function,
  };

  /* covariant property incompatible with contravariant use */
  resetGame: () => void;
  resetGame() {
    this.setState({
      game: () => <GameContainer onResetButtonClick={this.resetGame} />,
    });
  }

  render() {
    const ActiveGame = this.state.game;
    return (
      <div>
        <ActiveGame />
      </div>
    );
  }
}

module.exports = App;
