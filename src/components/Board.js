import React from 'react';
import Square from './Square';

function Board(props){
    return (
      <div className="Board">
        Board
        <Square 
        onClick={(e)=>console.log(e.target)}
        square={props.squares} />
      </div>
    );
}

export default Board;