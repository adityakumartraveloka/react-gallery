import React, { Component } from 'react';

class Image extends Component {

    render() {
        return (
            <div id="image">
                <img id="pic" 
                src={this.props.src}
                key={this.props.id}/>
            </div>
        );
    }
}

export default Image;