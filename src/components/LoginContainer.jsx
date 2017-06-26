import React from 'react';
import PropTypes from 'prop-types';
import Snoowrap from 'snoowrap';
import Cookies from 'js-cookie';

import PlayButton from './PlayButton';
import LoginButton from './LoginButton';
import HelpButton from './HelpButton';

import { authenticateUser, validateAuth, getMe } from '../utils/api';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      isLoggedIn: false,
    };

    this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
    this.onHelpButtonClick = this.onHelpButtonClick.bind(this);
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
    this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this);
  }

  componentDidMount() {
    let URLToken = null;
    const randomState = new URL(window.location.href).searchParams.get('state');
    if (randomState === Cookies.get('randomState')) {
      URLToken = new URL(window.location.href).searchParams.get('code');
      Cookies.remove('randomState');
    }
    const authCheck = localStorage.getItem('auth');
    if (URLToken && !authCheck) {
      validateAuth(URLToken).then((value) => {
        const auth = {
          userAgent: value.userAgent,
          clientId: value.clientId,
          refreshToken: value.refreshToken,
          accessToken: value.accessToken,
        };
        const config = value.config();

        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem('auth', JSON.stringify(auth));
          localStorage.setItem('config', JSON.stringify(config));
        } else {
          console.log('No localStorage support.');
        }

        window.location = window.location.href.slice(0, window.location.href.indexOf('?'));
      }, (reason) => {
        console.log(reason);
      });
    } else if (!URLToken && authCheck) {
      const REQUESTER = new Snoowrap(JSON.parse(localStorage.getItem('auth')));
      REQUESTER.config(JSON.parse(localStorage.getItem('config')));
      getMe(REQUESTER).then((user) => {
        this.setState({
          isLoggedIn: true,
          playerName: user.name,
        });
      }, (failure) => {
        console.log(failure);
      });
    }
  }

  onPlayButtonClick() {
    this.props.onPlayButtonClick();
  }

  onHelpButtonClick() {
    window.open('https://github.com/tsitu/Redditor-or-Robot#readme', '_blank');
  }

  onLoginButtonClick() {
    if (!this.state.isLoggedIn) {
      authenticateUser();
    }
  }

  onLogoutButtonClick() {
    if (this.state.isLoggedIn) {
      localStorage.removeItem('auth');
      localStorage.removeItem('config');
      this.setState({
        isLoggedIn: false,
        playerName: '',
      });
    }
  }

  render() {
    const nameString = this.state.isLoggedIn ?
      (<p>
        <i>Logged in as: {this.state.playerName}</i>
      </p>) : '';
    return (
      <div id="gameContainer">
        <span role="img" aria-label="Nerd">🤓</span> - <span role="img" aria-label="Robot">🤖</span> <br />
        Redditor or Robot? <br /> <br />
        <PlayButton isLoggedIn={this.state.isLoggedIn} onButtonClick={this.onPlayButtonClick} />
        <HelpButton onButtonClick={this.onHelpButtonClick} />
        <LoginButton
          isLoggedIn={this.state.isLoggedIn}
          onLoginClick={this.onLoginButtonClick}
          onLogoutClick={this.onLogoutButtonClick}
        />
        {nameString}
      </div>
    );
  }
}

LoginContainer.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
};

module.exports = LoginContainer;
