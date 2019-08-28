import React from 'react';
import Board from './Board';
import Status from './Status';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      square: [1,2,3,4,5,6,7,8,9]
    };
  }
  render(){
    return (
      <div className="game">
        game
        <Board squares={this.state.square}/>
        <Status/>
      </div>
    );
  } 
}

export default Game;