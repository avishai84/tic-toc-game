import React from 'react';

function Status(props){
    return (
      <div className="Status">
        Next play is: {props.nextTurnIs ? 'X' : 'O'}
      </div>
    );
}

export default Status;