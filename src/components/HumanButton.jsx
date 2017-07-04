/* @flow */

import React from 'react';

class HumanButton extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick: () => void;
  handleClick(e: MouseEvent) {
    e.preventDefault();
    this.props.onButtonClick('human');
  }

  props: {
    onButtonClick: Function,
  }

  render() {
    return (
      <button type="button" id="humanButton" onClick={this.handleClick}>
        <span role="img" aria-label="Nerd">🤓</span>
      </button>
    );
  }
}

module.exports = HumanButton;
