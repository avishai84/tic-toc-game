import React from 'react';

function Square(props){
    return (
      <div className="square" onClick={props.onClick} >
          <div className="row1">
            <button id="0"></button>
            <button id="1"></button>
            <button id="2"></button>
          </div>
          <div className="row2">
            <button id="3"></button>
            <button id="4"></button>
            <button id="5"></button>
          </div>
          <div className="row3">
            <button id="6"></button>
            <button id="7"></button>
            <button id="8"></button>
          </div>
        {/* {props.square.map((elem, index)=>{
            return(<button onClick={props.onClick} id={index} key={index}>{elem}</button>);
            
        })} */}
      </div>
    );
}

export default Square;