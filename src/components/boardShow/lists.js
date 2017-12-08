// Libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';
import StackGrid from 'react-stack-grid';
// Styles
// Components
import ListCreator from './listCreator';
import List from './list';

// Reducers

// Actions

// Other


class Lists extends Component {  
  renderLists(){    
    return this.props.lists.map((list,key) => {
      if(this.props.boardId === list.boardId){
        return (          
          <List grid={this.grid} key={key} list={list} />
        );
      }
      return null;
    })
  }
  render() {
    return (
      <StackGrid  gridRef={grid => this.grid = grid} columnWidth={315}>
        
        {this.renderLists()}        
        <ListCreator boardId={this.props.boardId} key={300}/>           
      </StackGrid>     
    );
  }
}
function mapStateToProps(state, ownProps){
  return {lists: state.lists, boardId: ownProps.boardId}
}
export default connect(mapStateToProps)(Lists);
