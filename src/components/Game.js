import React from 'react';
import Board from './Board';
import Status from './Status';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      square: Array(9).fill(null)
    };
  }
  render(){
    return (
      <div className="game">
        game
        <Board squares={this.state.square} onClick={this.props}/>
        <Status/>
      </div>
    );
  } 
}

export default Game;