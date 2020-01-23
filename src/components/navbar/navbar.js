import React from 'react';
import './navbar.css'

const NavBar = props => {
    return (
        <div id="wrapper">
            <a href="https://www.google.com"><div>Home</div></a>
            <a href="https://www.google.com"><div>Private</div></a>
            <a href="/login"><div>Login</div></a>
        </div>
    );
}

export default NavBar