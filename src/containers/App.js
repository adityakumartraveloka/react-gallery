import React, { Component } from 'react';
import './App.css';
import Card from '../components/albums/Card'
import Navbar from '../components/navbar/navbar';

class App extends Component {

  constructor() {
    super();
    this.state =  {
      album: [
        {
          id: '1', 
          img: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
          photos: [
            { id: '1c154fdf049ccd1', img: 'https://picsum.photos/300/210' },
            { id: '821b26b9fcf9750', img: 'https://picsum.photos/300/210' },
            { id: '93225d5ab9a9af3', img: 'https://picsum.photos/300/210' },
            { id: '34b13526391b47a', img: 'https://picsum.photos/300/210' },
            { id: '85534c293c3f929', img: 'https://picsum.photos/300/210' },
            { id: '8a4c472077518e4', img: 'https://picsum.photos/300/210' },
            { id: '9d8ec457751de4c', img: 'https://picsum.photos/300/210' },
            { id: 'f2acb669256847', img: 'https://picsum.photos/300/210' },
            { id: 'a4787ade101fef8', img: 'https://picsum.photos/300/210' },
            { id: '4d2eba34649ea48', img: 'https://picsum.photos/300/210' }
  
          ]
        },
        {
          id: '2', 
          img: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
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
        },
        {
          id: ' 3 ',
          img: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
          photos: [
            { id: 'b405d6b5204f72', img: 'https://picsum.photos/300/210' },
            { id: 'a460f72977ff226', img: 'https://picsum.photos/300/210' },
            { id: 'c597cbb293dacb8', img: 'https://picsum.photos/300/210' },
            { id: 'a715a9d6d407820', img: 'https://picsum.photos/300/210' },
            { id: '776fd0ca78ad5ae', img: 'https://picsum.photos/300/210' },
            { id: '835d1b84716025e', img: 'https://picsum.photos/300/210' },
            { id: 'fc3c565c6b8d06', img: 'https://picsum.photos/300/210' },
            { id: 'cceb8a693483680', img: 'https://picsum.photos/300/210' },
            { id: '736b152d1a14e85', img: 'https://picsum.photos/300/210' },
            { id: 'c79112c9be4e3ac', img: 'https://picsum.photos/300/210' }
          ]
  
        },
        {
          id: ' 4 ',
          img: 'https://homepages.cae.wisc.edu/~ece533/images/barbara.png',
          photos: [
              { id: '9ad43aa12a3932f', img: 'https://picsum.photos/300/210' },
              { id: 'da8df0f1e96d0d5', img: 'https://picsum.photos/300/210' },
              { id: '43c8a154cfbbf53', img: 'https://picsum.photos/300/210' },
              { id: '9f281f55d636d93', img: 'https://picsum.photos/300/210' },
              { id: '5d593e0a86da4cc', img: 'https://picsum.photos/300/210' },
              { id: '94e5399b691b671', img: 'https://picsum.photos/300/210' },
              { id: '8808eaf837ea029', img: 'https://picsum.photos/300/210' },
              { id: '9819dee73a51ebf', img: 'https://picsum.photos/300/210' },
              { id: '74e19806840ac0b', img: 'https://picsum.photos/300/210' },
              { id: '51c0f594e66f01b', img: 'https://picsum.photos/300/210' }
          ]
        },
        {
          id: ' 5 ',
          img: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
          photos: [
            { id: '77d5fe446e88512', img: 'https://picsum.photos/300/210' },
            { id: '43465c9e294805e', img: 'https://picsum.photos/300/210' },
            { id: '11b77a0c80fc782', img: 'https://picsum.photos/300/210' },
            { id: '4dbf9407ae3d8c0', img: 'https://picsum.photos/300/210' },
            { id: 'd25c23cef6838ad', img: 'https://picsum.photos/300/210' },
            { id: 'a6103b3b11a15ca', img: 'https://picsum.photos/300/210' },
            { id: '5c6be771f10a8c2', img: 'https://picsum.photos/300/210' },
            { id: '74aa5fe5e6afb84', img: 'https://picsum.photos/300/210' },
            { id: 'c4a23d7e8daf02c', img: 'https://picsum.photos/300/210' },
            { id: '2a7648e65910d29', img: 'https://picsum.photos/300/210' }
        ]
      },
      {
        id: ' 6 ',
        img: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
        photos: [
          { id: '4c41c9c813e91a1', img: 'https://picsum.photos/300/210' },
          { id: '1cd741f6ac0bee2', img: 'https://picsum.photos/300/210' },
          { id: '55a245c9575c8f6', img: 'https://picsum.photos/300/210' },
          { id: '663291a1903d333', img: 'https://picsum.photos/300/210' },
          { id: 'c5d443e7c9afc82', img: 'https://picsum.photos/300/210' },
          { id: '2e6e71688ee3477', img: 'https://picsum.photos/300/210' },
          { id: 'f369b8d2400c56', img: 'https://picsum.photos/300/210' },
          { id: '310d5c0de44221d', img: 'https://picsum.photos/300/210' },
          { id: '2750151d2c95905', img: 'https://picsum.photos/300/210' },
          { id: '1a1e096f79041f4', img: 'https://picsum.photos/300/210' }
        ]
      },
      {
        id: ' 7 ',
        img: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
        photos: [
          { id: '8b2438c07736688', img: 'https://picsum.photos/300/210' },
          { id: 'f6663a2fb622db', img: 'https://picsum.photos/300/210' },
          { id: '59dc5b129091c27', img: 'https://picsum.photos/300/210' },
          { id: '810473826b24b3d', img: 'https://picsum.photos/300/210' },
          { id: '518f4fe903481d', img: 'https://picsum.photos/300/210' },
          { id: 'd18bd053061cff6', img: 'https://picsum.photos/300/210' },
          { id: '10277eacfea6951', img: 'https://picsum.photos/300/210' },
          { id: '8e6f247b28bd6c1', img: 'https://picsum.photos/300/210' },
          { id: '371a14e6fa2ddea', img: 'https://picsum.photos/300/210' },
          { id: '59020ae8c99a54e', img: 'https://picsum.photos/300/210' }
        ]
      },
      {
        id: ' 8 ',
        img: 'https://picsum.photos/300/210',
        photos: [
          { id: '47d4b2b18bfb45c', img: 'https://picsum.photos/300/210' },
          { id: '47d7512d2567b8e', img: 'https://picsum.photos/300/210' },
          { id: '4c3ad616669eb80', img: 'https://picsum.photos/300/210' },
          { id: '3ac8e09971a8699', img: 'https://picsum.photos/300/210' },
          { id: 'eb4750cdbc5943', img: 'https://picsum.photos/300/210' },
          { id: 'd614732172ef42b', img: 'https://picsum.photos/300/210' },
          { id: '9ddb2d5380aa038', img: 'https://picsum.photos/300/210' },
          { id: '55bdd98faf27f5d', img: 'https://picsum.photos/300/210' },
          { id: 'c9f596407d39725', img: 'https://picsum.photos/300/210' },
          { id: 'd9af96d09202471', img: 'https://picsum.photos/300/210' }
        ]
      },
      {
          id: ' 9 ',
          img: 'https://picsum.photos/300/210',
          photos: [
            { id: '2a1895efe44b104', img: 'https://picsum.photos/300/210' },
            { id: '51d9e319617ce16', img: 'https://picsum.photos/300/210' },
            { id: '34f425efeebd744', img: 'https://picsum.photos/300/210' },
            { id: '5acc6befe7a53de', img: 'https://picsum.photos/300/210' },
            { id: '1fa953b39d67245', img: 'https://picsum.photos/300/210' },
            { id: '77826c44bbb7425', img: 'https://picsum.photos/300/210' },
            { id: 'bd35bcd1e03eb68', img: 'https://picsum.photos/300/210' },
            { id: '7618ad00dbcaa06', img: 'https://picsum.photos/300/210' },
            { id: '72fd654509e71c0', img: 'https://picsum.photos/300/210' },
            { id: 'ab401168e03d332', img: 'https://picsum.photos/300/210' }
          ]
        },
        {
          id: ' 10 ',
          img: 'https://picsum.photos/300/210',
          photos: [
            { id: 'd312b3b1eec5fc0', img: 'https://picsum.photos/300/210' },
            { id: '6d37bd212e5dcf1', img: 'https://picsum.photos/300/210' },
            { id: 'c855e05ba9fc6cf', img: 'https://picsum.photos/300/210' },
            { id: 'a1d458eb06db00a', img: 'https://picsum.photos/300/210' },
            { id: '2aba9d60a391185', img: 'https://picsum.photos/300/210' },
            { id: '38cb78dc9daa5fe', img: 'https://picsum.photos/300/210' },
            { id: '71f1ce80d3f9fbc', img: 'https://picsum.photos/300/210' },
            { id: '2565130dc2e10fe', img: 'https://picsum.photos/300/210' },
            { id: '2ea1ecd52b3e4f', img: 'https://picsum.photos/300/210' },
            { id: 'cd74a7c55a86f6c', img: 'https://picsum.photos/300/210' }
          ]
        }
      ]
    };

    this.deleteAlbumHandler = this.deleteAlbumHandler.bind(this);
  }

  deleteAlbumHandler(album_id){
    const index = this.state.album.findIndex(album => album.id === album_id);
    const album = this.state.album;
    album.splice(index,1);
    this.setState({album: album});
  }

  render (){
    return (
      <div className="App">
          <Navbar/>
          <div id="album">
              {this.state.album.map(album => {
                return <Card 
                  source={album.img}
                  key={album.id}
                  id={album.id}
                  deleteAlbum={this.deleteAlbumHandler}
                />
                // console.log(props);
              })}
          </div>
      </div>
    );
  }
};

export default App;
