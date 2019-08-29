import React from 'react';
import Board from './Board';
import Status from './Status';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      square: Array(9).fill(null),
      nextTurnIs: true,
      mark: 'X'
    };

  }
   updateGame(e, state, mark){
    console.log(e.target,state, mark);
    this.setState({
      nextTurnIs: state,
      mark: state ? 'O' : 'X' 
    })
    }

  render(){
    // console.log(this.state.nextTurnIs);
    // console.log(this.state.mark);
    return (
      <div className="game">
        game
        <Board 
        squares={this.state.square}  
        nextTurnIs={this.state.nextTurnIs} 
        updateGame={this.updateGame.bind(this)}
        mark={this.state.mark}
        
    
        />
        <Status nextTurnIs={this.state.nextTurnIs}/>
      </div>
    );
  } 
}

export default Game;