import React from 'react';
import Board from './Board';
import Status from './Status';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      square: Array(9).fill(null),
      nextTurnIs: true
    };

  }
   updateGame(state){
   console.log('State: '+ state);
    this.setState({
   
      nextTurnIs: state
     
    })
  }
  render(){
    console.log(this.state.nextTurnIs);
    return (
      <div className="game">
        game
        <Board squares={this.state.square}  nextTurnIs={this.state.nextTurnIs} updateGame={this.updateGame.bind(this)}/>
        <Status nextTurnIs={this.state.nextTurnIs}/>
      </div>
    );
  } 
}

export default Game;