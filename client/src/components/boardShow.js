// Libraries
import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
// Styles
import '../style/paper.css';
import '../style/paperAdjusted.css'
import '../style/grid.css';

// Components
import Lists from './boardShow/lists';
// Reducers

// Other


class BoardShow extends Component{ 
  render() {
    const board = this.props.board;
    if(!board){
      return <h1>Ooops! How did you get here?</h1>
    }
    return (
      <div className="container">
        <header>
          <div className="row flex-middle">
            <div className="col sm-10">
              <h1 className="">Jello - {board.name}</h1>
            </div>
            <div className="col sm-2 ">
              <Link className="paper-btn btn-block btn-danger " to={`/`}>Back</Link>
              
            </div>
          </div>          
        </header>
        
        <Lists boardId={this.props.board.id} />
        <div className="footer"/>
      </div>
    );
  }
}
function mapStateToProps(state,ownProps){  
  const board =  {board: state.boards.filter((obj)=>{return obj.id == ownProps.match.params.name})[0]};
  console.log(board);
  return board;
}

export default connect(mapStateToProps)(BoardShow);