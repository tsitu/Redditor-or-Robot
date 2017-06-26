import React from 'react';
import PropTypes from 'prop-types';

class HumanButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onButtonClick('human');
  }

  render() {
    return (
      <button type="button" id="humanButton" onClick={this.handleClick}>
        <span role="img" aria-label="Nerd">🤓</span>
      </button>
    );
  }
}

HumanButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

module.exports = HumanButton;
