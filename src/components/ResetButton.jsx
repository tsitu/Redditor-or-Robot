/* @flow */

import React from 'react';

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
        <span role="img" aria-label="Joystick">🕹️</span>
      </button>
    );
  }
}

module.exports = ResetButton;
