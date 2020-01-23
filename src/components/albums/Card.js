import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import './Card.css';

class Card extends Component {

    routechange = () => {
        let path = '/login';
        let history = useHistory();
        history.push(path);
    }
   
    render(){
        console.log('[Card.js] rendering..')
        return (
            <div id="card">
                <div id="image">
                    <img src={this.props.source} alt=""></img>
                </div>
                <div id="title">This is our title</div>
                <div id="button">
                    <button 
                        id="Open" 
                        onClick={this.routechange}>
                        Open
                    </button>

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