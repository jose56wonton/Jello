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
    var cardStyles = {
      width: '12rem'
    };
    const board = this.props.board;
    if(!board)
      return null;
    
    return (      
      <div className="card col sm-6 md-4" style={cardStyles}>
        <div className="card-body">
          <div className="row">
            <div className="col sm-12">
              <div className="form-group" >
                <h3 ref="name">Name: {board.name}</h3>
                <p>Description: {board.description}</p>
                <h5>Lists: 10</h5>
                <h5>Items: 50</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col sm-7">
              <Link className="btn-block paper-btn btn-success" to={`/board/${board.id}`}>View</Link>
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

export default connect(null, actions)(Board);
