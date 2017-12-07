// Libraries
import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
// Styles
// Components
import ListCreator from './listCreator';
import List from './list';
// Reducers

// Actions

// Other


class Lists extends Component {  
  renderLists(){ 
   
    const what =  this.props.lists.map((list,key) =>{
      if(this.props.boardId == list.boardId){
        return (
          <List key={key} list={list} />
        );
      }
    })
    console.log(what);
    return what;
    
  }
  render() {
    return (
      <div className="row flex-top ">
        {this.renderLists()}
        <ListCreator boardId={this.props.boardId} key={Date.now()}/>        
      </div>      
    );
  }
}
function mapStateToProps(state, ownProps){
  return {lists: state.lists, boardId: ownProps.boardId}
}
export default connect(mapStateToProps)(Lists);
