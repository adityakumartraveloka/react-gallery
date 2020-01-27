import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Card from '../components/albums/Card'
// import Navbar from '../components/navbar/navbar';

class App extends Component {

  constructor() {
    super();
    this.state =  {
      album: [],
      login: false,
      token: "",
    };

    this.deleteAlbumHandler = this.deleteAlbumHandler.bind(this);
    this.authenticateHandler = this.authenticateHandler.bind(this);
  }

  showAlbumHandler(album_id){
    const index = this.state.album.findIndex(album => album.id === album_id);
    // nohup google-chrome --disable-web-security --user-data-dir='/tmp' &
    return index;
  }

  deleteAlbumHandler(album_id){
    const index = this.state.album.findIndex(album => album.id === album_id);
    const album = this.state.album;
    album.splice(index,1);
    this.setState({album: album});
  }

  authenticateHandler(data) {
    if(data.length > 0){
      this.setState({
        login: true,
        token: data
      });
    }
    else{
      this.setState({
        login: false
      });
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/album')
      .then(response => {
        console.log(response);
        this.setState({album: response.data.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render (){
    return (
      <div className="App">
          {/* <Navbar/> */}
          <div id="album">
              {this.state.album.map(data => {
                return <Card 
                  source={data.image_link}
                  title={data.album_name}
                  isLogin={this.state.login}
                  token={this.state.token}
                  key={data._id}
                  id={data._id}
                  authenticateHandler={this.authenticateHandler}
                  deleteAlbum={this.deleteAlbumHandler}
                />
              })}
          </div>
        </div>
    );
  }
};

export default App;
