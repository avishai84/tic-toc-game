import React from 'react';
import Board from './Board';


class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      square: Array(9).fill(null),
      nextTurnIs: true,
      mark: 'X',
      ended: !false ? 'disabled': '' 
    };

  }
  // update which player is next
   updateGame(e, state, mark){
    this.setState({
      nextTurnIs: state,
      mark: state ? 'O' : 'X' 
      })
    }

    sqr(idPosition, mark){
      // update state for sqr
      let newArray = this.state.square;
      idPosition = Number.parseInt(idPosition);
      // Update the array
      newArray[idPosition] = mark;
      this.setState({
        square : this.state.square
      });
      // check if there is a winner
      this.calcWin(this.state.square);
    }

    calcWin(array){
      const linesSquare = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
  
      for (let i = 0; i < linesSquare.length; i++) {
          const [a, b, c] = linesSquare[i];
          if (array[a] && array[a] === array[b] && array[a] === array[c]) {
              return array[a];
            }
          }
      return null;
  }

  render(){
  
    const statusWin = this.calcWin(this.state.square);
    let statusReport;
    if(statusWin){
      statusReport = `Game Over! - ${statusWin} won.`
    }else{
    statusReport = 'Game on, no winners yet.'
    }

    return (
      <div className="game">
        <h4>{statusReport}</h4>
        <Board 
        squares={this.state.square}  
        nextTurnIs={this.state.nextTurnIs} 
        updateGame={this.updateGame.bind(this)}
        mark={this.state.mark}
        updateSqr={this.sqr.bind(this)}
        />
    
      </div>
    );
  } 
}

export default Game;