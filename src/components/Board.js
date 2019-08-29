import React, {Fragment, Component} from 'react';
import Square from './Square';

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            sqr: this.props.squares,
            nextTurnIs: this.props.nextTurnIs
        };
    }
    triggeredFromSquare(e){
        if(e.target.nodeName === 'BUTTON'){
            console.log(e.target.id);
            // target the btn which was clicked
            this.setState({
                nextTurnIs: !this.state.nextTurnIs
            });
           this.props.updateGame(this.state.nextTurnIs);
        }

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