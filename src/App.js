import React, { Component } from 'react';
import './App.css';

import Searchbar from'./cont/searchbar/Searchbar.js';

import Nav from'./pres/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>LITICS</h2>
        </div>
        <div className="App-content">
          <Nav />
          <Searchbar></Searchbar>
        </div>
      </div>
    );
  }
}

export default App;
