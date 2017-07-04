/* @flow */

import React from 'react';

class HelpButton extends React.Component {
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
      <button type="button" id="helpButton" onClick={this.handleClick}>Help</button>
    );
  }
}

module.exports = HelpButton;
