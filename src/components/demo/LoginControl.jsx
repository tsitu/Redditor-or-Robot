import React from "react";

// LoginControl Demo
function UserGreeting(props) {
    return <h2>Welcome back!</h2>;
}

function GuestGreeting(props) {
    return <h2>Please sign up.</h2>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <fieldset>
                <legend>LoginControl Demo</legend>
                <div>
                    <Greeting isLoggedIn={isLoggedIn} />
                    <h3>You are <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</h3>
                    {button}
                </div>
            </fieldset>
        );
    }
}

module.exports = LoginControl;