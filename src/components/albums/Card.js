import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render(){
        return (
            <div id="card">
                <div id="image">
                    <img src={this.props.source} alt=""></img>
                </div>
                <div id="title">This is our title</div>
                <div id="button">
                    <button id="Open">Open</button>
                    <button id="Delete" onClick={()=>this.props.deleteAlbum(this.props.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Card;