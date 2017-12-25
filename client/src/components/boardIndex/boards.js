// Libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';
// Styles
// Components
import BoardCreator from './boardCreator';
import Board from './board';
// Reducers

// Actions

// Other


class Boards extends Component {  
  renderBoards(){ 
    return this.props.boards.map((board,key) =>{
      return (
        <Board key={key} board={board} />
      );
    })
  }
  render() {
    return (
      <div className="row flex-top ">
        {this.renderBoards()}
        <BoardCreator key={Date.now()}/>
        
      </div>      
    );
  }
}
function mapStateToProps(state){
  return {boards: state.boards}
}
export default connect(mapStateToProps)(Boards);