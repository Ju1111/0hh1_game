import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board';
import CreateGameButton from './components/CreateGameButton'
// import React from 'react'
// import { shallow } from 'enzyme'
// import App from './App'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">0hh1</h1>
          <Board />
          <CreateGameButton />
        </header>
      </div>
    );
  }
}

export default App;
