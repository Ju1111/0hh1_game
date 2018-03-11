import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board';
import CreateGameButton from './components/CreateGameButton'
import Progress from './components/PlayerProgress'
import Finished from './components/GameFinished'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Title">0h  h1</h1>
        <Progress />
        <Board />
        <CreateGameButton />

        <Finished />
      </div>
    );
  }
}

export default App;
