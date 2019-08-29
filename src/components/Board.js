import React, {Fragment, Component} from 'react';
import Square from './Square';

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
        console.log('before');
        console.log(this.props.mark);
        if(e.target.nodeName === 'BUTTON'){
            // this will determind which block you clicked on
           // console.log(e.target.id);
            // target the btn which was clicked
            this.setState({
                nextTurnIs: !this.state.nextTurnIs,
                mark : this.state.nextTurnIs ? 'O' : 'X'
            });
           this.props.updateGame(e, this.state.nextTurnIs, this.state.mark);
           if(e.target.nodeName === 'BUTTON'){
           e.target.innerText = this.props.mark;
       
          }
        }
    }



    render(){

        return (
            <div className="Board">
              Board
              <Square 
              onClick={(e) => this.triggeredFromSquare(e)}
              square={this.props.squares} 
              />
              {this.state.sqr}
             
            </div>
          );
    }
}
 


export default Board;