import React from 'react';
import PropTypes from 'prop-types';

class RoboButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onButtonClick('robot');
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
