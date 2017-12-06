// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Styles
import '../style/paper.css';
import '../style/paperAdjusted.css'
import '../style/grid.css';

// Components

// Reducers

// Other


class BoardShow extends Component {
  

  render() {
    const board = this.props.board;
    if(!board){
      return <h1>Ooops! How did you get here?</h1>
    }
    return (
      <div className="container">
        <header className="App-header">
          <h1>{board.name}</h1>
          <h3>{board.description}</h3>
        </header>


      </div>
    );
  }
}
function mapStateToProps(state,ownProps){  
  return {board: state.boards.filter((obj)=>{return obj.id == ownProps.match.params.name})[0]};
}

export default connect(mapStateToProps)(BoardShow);