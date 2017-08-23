/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

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
    window.open('https://github.com/tsitu/Redditor-or-Robot/blob/master/README.md', '_blank');
  }

  props: {
    onPlayButtonClick: Function,
  }

  render() {
    return (
      <div id="gameContainer">
        <span role="img" aria-label="Human">🙋</span> -:- <span role="img" aria-label="Robot">💻</span> <br />
        <p id="gameTitle">Redditor or Robot?</p>
        <PlayButton onButtonClick={this.onPlayButtonClick} />
        <HelpButton onButtonClick={this.onHelpButtonClick} />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
};

module.exports = LoginContainer;
