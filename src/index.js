import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './containers/App';
import Login from './components/Login/login'
import Signup from './components/SignUp/signup'
import Photo from './components/photos/photo'
import NavBar from './components/navbar/navbar'
import * as serviceWorker from './serviceWorker';
// import NavBar from './components/navbar/navbar';

const routing = (
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/album/:album_id" component={Photo}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
