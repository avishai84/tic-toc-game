import React, {Fragment, Component} from 'react';
import Square from './Square';

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            sqr: this.props.squares
        };
    }
    triggeredFromSquare(e){
        console.log(e.target.id);
    }

    render(){
        return (
            <div className="Board">
              Board
              <Square 
              onClick={(e)=> this.triggeredFromSquare(e)}
              square={this.props.squares} />
              {this.state.sqr}
            </div>
          );
    }
}
 


export default Board;