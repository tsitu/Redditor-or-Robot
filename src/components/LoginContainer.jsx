/* @flow */

import React from 'react';

import PlayButton from './PlayButton';
import HelpButton from './HelpButton';

class LoginContainer extends React.Component {
  constructor(props: any) {
    super(props);

    this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
    this.onHelpButtonClick = this.onHelpButtonClick.bind(this);
  }

  onPlayButtonClick: () => void;
  onPlayButtonClick() {
    this.props.onPlayButtonClick();
  }

  onHelpButtonClick: () => void;
  onHelpButtonClick() {
    window.open('https://github.com/tsitu/Redditor-or-Robot/blob/master/README.md#redditor-or-robot--', '_blank');
  }

  props: {
    onPlayButtonClick: Function,
  }

  render() {
    return (
      <div id="gameContainer">
        <span role="img" aria-label="Nerd">🤓</span> - <span role="img" aria-label="Robot">🤖</span> <br />
        Redditor or Robot? <br /> <br />
        <PlayButton onButtonClick={this.onPlayButtonClick} /> <br />
        <HelpButton onButtonClick={this.onHelpButtonClick} />
      </div>
    );
  }
}

module.exports = LoginContainer;
