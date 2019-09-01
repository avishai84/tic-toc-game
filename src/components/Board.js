import React, {Fragment, Component} from 'react';
import Square from './Square';
import Status from './Status';

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            sqr: this.props.squares,
            nextTurnIs: this.props.nextTurnIs,
            mark: this.props.mark
        };
    }
    triggeredFromSquare(e){
        if(e.target.nodeName === 'BUTTON'){
            // this will determind which block you clicked on
            // target the btn which was clicked
            this.setState({
                nextTurnIs: !this.state.nextTurnIs,
                mark : this.state.nextTurnIs ? 'O' : 'X'
            });
           this.props.updateGame(e, this.state.nextTurnIs, this.state.mark);
           // update positon in array based on id
           this.updateSqrArr(e.target.id);
           if(e.target.nodeName === 'BUTTON'){
           e.target.innerText = this.props.mark;
          }
        }
    }
    updateSqrArr(idPosition){
        // pass on data to parent Game
        this.props.updateSqr(idPosition, this.state.mark);
    }

    render(){

        return (
            <div className="Board">
              <Square 
              onClick={(e) => this.triggeredFromSquare(e)}
              square={this.props.squares} 
              />
              {this.state.sqr}
              <Status nextTurnIs={this.state.nextTurnIs}/>
            </div>
          );
    }
}
 


export default Board;