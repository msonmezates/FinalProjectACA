import React, { Component } from 'react';
import ListOfMemesContainer from '../containers/ListOfMemesContainer';

class App extends Component {
  
  render() {
    return (
      <div>
        <h2><u>Meme Generator</u></h2>
        <ListOfMemesContainer />
      </div>
    );
  }
}

export default App;
