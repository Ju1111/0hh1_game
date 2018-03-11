import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board';
import CreateGameButton from './components/CreateGameButton'
import Progress from './components/PlayerProgress'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Title">0hh1</h1>
        <Progress />
        <Board />
        <CreateGameButton />
      </div>
    );
  }
}

export default App;
