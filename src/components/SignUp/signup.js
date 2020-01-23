import React, { Component } from 'react';
import './signup.css';

class SignUp extends Component {
    render() {
        return (
            <div id="signup">
                <div id="key">Email</div>
                <div id="ip">
                    <input type="email" name="email"></input>
                </div>
                <div id="key">Password</div>
                <div id="ip">
                    <input type="password" name="password"></input>
                </div>
                <div id="key">Confirm Password</div>
                <div id="ip">
                    <input type="confirm_password" name="confirm_password"></input>
                </div>
                <div id="signup-button">
                    <button id="signup-main-button">Submit</button>
                </div>
            </div>
        );
    }
}

export default SignUp;