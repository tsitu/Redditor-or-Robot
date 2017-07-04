/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

class RoboButton extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick: () => void;
  handleClick(e: MouseEvent) {
    e.preventDefault();
    this.props.onButtonClick('robot');
  }

  props: {
    onButtonClick: Function,
  }

  render() {
    return (
      <button type="button" id="roboButton" onClick={this.handleClick}>
        <span role="img" aria-label="Robot">🤖</span>
      </button>
    );
  }
}

RoboButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

module.exports = RoboButton;
