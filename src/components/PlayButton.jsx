/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

class PlayButton extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick: () => void;
  handleClick(e: MouseEvent) {
    e.preventDefault();
    this.props.onButtonClick();
  }

  props: {
    onButtonClick: Function,
  }

  render() {
    return (
      <div>
        <button type="button" id="playButton" onClick={this.handleClick}>Play!</button>
      </div>
    );
  }
}

PlayButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

module.exports = PlayButton;
