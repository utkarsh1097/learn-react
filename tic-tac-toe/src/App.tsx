import React from 'react';
import './App.css';
import Heading from './Heading';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <Heading text="Tic Tac Toe"/>
      <Board/>
    </div>
  );
}

export default App;
