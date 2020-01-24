import React, { Component } from 'react';
import './login.css';
import NavBar from '../navbar/navbar';

class Login extends Component {
    render() {
        return (
            <div>
                <div id="login">
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
            </div>
        );
    }
}

export default Login;