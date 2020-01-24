import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

class Card extends Component {
   
    render(){
        console.log('[Card.js] rendering..')
        return (
            <div id="card">
                <div id="image">
                    <img src={this.props.source} alt=""></img>
                </div>
                <div id="title">This is our title</div>
                <div id="button">
                    <Link id="Open" to='login'>
                        Open
                    </Link>
                    <button 
                        id="Delete" 
                        onClick={()=>this.props.deleteAlbum(this.props.id)}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;