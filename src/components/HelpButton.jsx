/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

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

HelpButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

module.exports = HelpButton;
