import React from 'react';
import PropTypes from 'prop-types';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLogoutClick(e) {
    e.preventDefault();
    this.props.onLogoutClick();
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.props.onLoginClick();
  }

  render() {
    const button = this.props.isLoggedIn ?
      <button type="button" id="loginButton" onClick={this.handleLogoutClick}>Logout</button> :
      <button type="button" id="loginButton" onClick={this.handleLoginClick}>Login</button>;
    return (
      <div>
        {button}
      </div>
    );
  }
}

LoginButton.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

module.exports = LoginButton;
