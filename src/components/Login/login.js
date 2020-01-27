import React, { Component } from 'react';
import './login.css';
import axios from 'axios'
 

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            token: ""
        }
    }

    changehandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submithandler = (event) => {
        console.log('[submit handler]');
        event.preventDefault();

        axios.post("http://localhost:5000/user/login", this.state)
        .then( response => {
            console.log(response);
            this.setState({
                token: response.data.token,
                username: "",
                password: ""
            });
            console.log(this.state);
            this.props.history.push("/")
        })
        .catch( error => {
            console.log(error.response);
        })
    
    }

    render() {
        const {username, password} = this.state;
        return (
            <div>
           <form onSubmit={this.submithandler}>
               <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.changehandler}>
                </input>

                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.changehandler}>
                </input>

                <button type="submit">Submit</button>
           </form>
           </div>
        );
    }
}

export default Login;  