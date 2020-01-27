import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import '../../logo512.png'

class Card extends Component {
   
    render(){
        console.log('[Card.js] rendering..', this.props.source.toString());
        return (
            <div id="card">
                <div id="image">
                    <img src={this.props.source} alt=""></img>
                </div>
                <div id="title">{this.props.title}</div>
                <div id="button">
                    <Link id="link"  to={`/album/${this.props.id}`}>
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