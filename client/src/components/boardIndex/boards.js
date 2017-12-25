// Libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';
import StackGrid from 'react-stack-grid';
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
        <Board  key={key} board={board} />
      );
    })
  }
  render() {
    return (
      <StackGrid columnWidth={315}>
        {this.renderBoards()}
        <BoardCreator key={Date.now()}/>        
      </StackGrid>      
    );
  }
}
function mapStateToProps(state){
  return {boards: state.user}
}
export default connect(mapStateToProps)(Boards);
