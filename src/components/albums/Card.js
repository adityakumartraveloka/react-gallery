import React from 'react';
import './Card.css';

const Card = props => {
    console.log('[Card.js] redering card', props);
    return (
        <div id="card">
            <div id="image">
                <img src={props.source} alt=""></img>
            </div>
            <div id="title">This is our title</div>
            <div id="button">
                <button id="Open">Open</button>
                <button id="Delete">Delete</button>
            </div>
        </div>
    );
}

export default Card;