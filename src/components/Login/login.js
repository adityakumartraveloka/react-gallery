import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div id="login">
                {/* <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div> */}

                <div id="key">Email</div>
                <div id="ip">
                    <input id="login-input" type="email" name="email"></input>
                </div>
                <div id="key">Password</div>
                <div id="ip">
                    <input id="login-input" type="password" name="password"></input>
                </div>
                <div id="login-button">
                    <button id="login-main-button">Submit</button>
                </div>
            </div>
        );
    }
}

export default Login;