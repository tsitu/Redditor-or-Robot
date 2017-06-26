import React from 'react';
import PropTypes from 'prop-types';

class HelpButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onButtonClick();
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
