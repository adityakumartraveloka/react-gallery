import React, { Component } from 'react';
import Image from '../image/image'
import '../../containers/App.css'

class Photo extends Component {
    constructor(){
        super();

        this.state = {
            photos: [
                { id: '2b6b355fd261dde', img: 'https://picsum.photos/300/210' },
                { id: '1ad3bfb6f9a5847', img: 'https://picsum.photos/300/210' },
                { id: '60bd083d15f9703', img: 'https://picsum.photos/300/210' },
                { id: 'a0fd3997dfe1e1d', img: 'https://picsum.photos/300/210' },
                { id: 'c7e581ff56c9593', img: 'https://picsum.photos/300/210' },
                { id: '12bd3c1ceb10c9f', img: 'https://picsum.photos/300/210' },
                { id: '533dc05dbcbe720', img: 'https://picsum.photos/300/210' },
                { id: '21275ebff89fa32', img: 'https://picsum.photos/300/210' },
                { id: '7c1f4b00525a694', img: 'https://picsum.photos/300/210' },
                { id: '1d0bf7f45cb6f7a', img: 'https://picsum.photos/300/210' }
              ]
        }
    }
    render () {
        return (
            <div id="album">
                {this.state.photos.map(photo => {
                    return <Image 
                    src={photo.img}
                    key={photo.id}/>
                })}
            </div>
        );
    }
}

export default Photo;