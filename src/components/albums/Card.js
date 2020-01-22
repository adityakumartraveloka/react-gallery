import React from 'react';
import './Card.css';

const Card = props => {
    console.log('[Card.js] redering card', props);
    return (
        <div className="Card">
            <img className="img" src={props.source} alt='This is an alternative'></img>
            <div className="container">
                <p>This is the image title</p>
                    <button className="button">Open Album</button>
            </div>
        </div>
    );
}

export default Card;