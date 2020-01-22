import React from 'react';
import './navbar.css'

const rightStyle = {
    float: 'right',
}

const NavBar = props => {
    return (
        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li style={rightStyle}><a href="#">Login</a></li>
                <li style={rightStyle}><a href="#">SignUp</a></li>
            </ul>
        </div>
    );
}

export default NavBar