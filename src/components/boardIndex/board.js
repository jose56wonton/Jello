// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
// Styles
// Components

// Reducers

// 
import * as actions from '../../actions';
// Other


class Board extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete() {
    this.props.deleteBoard(this.props.board.id);
  }
  render() {
   
    
    const board = this.props.board;
    if(!board)
      return null;
    const listCount = this.props.lists.filter((list) => { return list.boardId === board.id; }).length;
    const taskCount = this.props.tasks.filter((task) => { return task.boardId === board.id; }).length;      
    return (      
      <div className="card " >
        <div className="card-body">
          <div className="row">
            <div className="col sm-12">
              <div className="form-group" >
                <h3 ref="name">{board.name}</h3>
                <p>{board.description}</p>
                <h5>Lists: {listCount}</h5>
                <h5>Items: {taskCount}</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col sm-7">
              <Link className="btn-block paper-btn btn-secondary" to={`/board/${board.id}`}>View</Link>
            </div>
            <div className="col col-fill">
              <button onClick={this.onDelete} className=" btn-block btn-danger" type="submit" >X</button>
            </div>
          </div>         
        </div>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  return {
    board: ownProps.board,
    tasks: state.tasks,
    lists: state.lists,
  }
}

export default connect(mapStateToProps, actions)(Board);
