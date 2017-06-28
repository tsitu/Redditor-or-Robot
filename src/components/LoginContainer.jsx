import React from 'react';
import PropTypes from 'prop-types';

import PlayButton from './PlayButton';
import HelpButton from './HelpButton';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
    this.onHelpButtonClick = this.onHelpButtonClick.bind(this);
  }

  onPlayButtonClick() {
    this.props.onPlayButtonClick();
  }

  onHelpButtonClick() {
    window.open('https://github.com/tsitu/Redditor-or-Robot/blob/gh-pages/README.md#redditor-or-robot--', '_blank');
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

LoginContainer.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
};

module.exports = LoginContainer;
