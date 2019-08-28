import React from 'react';
import Board from './Board';
import Status from './Status';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      square: ''
    };
  }
  render(){
    return (
      <div className="game">
        game
        <Board/>
        <Status/>
      </div>
    );
  } 
}

export default Game;