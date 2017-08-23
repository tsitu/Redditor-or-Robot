/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

class ResetButton extends React.Component {
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
      <button type="button" id="resetButton" onClick={this.handleClick}>
        <span role="img" aria-label="Video Game">🎮</span>
      </button>
    );
  }
}

ResetButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

module.exports = ResetButton;
