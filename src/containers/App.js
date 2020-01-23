import React, { Component } from 'react';
import './App.css';
import Card from '../components/albums/Card'
import Navbar from '../components/navbar/navbar';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    image: [
      {id: '1', img: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
      {id: '2', img: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'},
      {id: '3', img: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'},
      {id: '4', img: 'https://homepages.cae.wisc.edu/~ece533/images/barbara.png'},
      {id: '5', img: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'},
      {id: '6', img: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'},
      {id: '7', img: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png'},
      
    ]
  };

  render (){
    return (
      <div className="App">
          <Navbar/>
          <div id="album">
              {this.state.image.map(image => {
                return <Card 
                source={image.img}
                key={image.id}  
                >
                </Card>
              })}
          </div>
      </div>
    );
  }
};

export default App;
