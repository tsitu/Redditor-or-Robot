import React from 'react';
import PropTypes from 'prop-types';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onButtonClick();
  }

  render() {
    const button = this.props.isLoggedIn ?
      <button type="button" id="playButton" onClick={this.handleClick}>Play!</button> :
      <button type="button" id="playButton" onClick={this.handleClick} disabled>Play!</button>;
    return (
      <div>
        {button}
      </div>
    );
  }
}

PlayButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

module.exports = PlayButton;
