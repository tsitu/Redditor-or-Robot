/* @flow */

import React from 'react';

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

module.exports = PlayButton;
