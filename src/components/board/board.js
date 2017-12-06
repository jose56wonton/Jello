// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
// Components

// Reducers

// 
import * as actions from '../../actions';
// Other


class Board extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.deleteBoard(this.props.board);
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
        <form className="card-body" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col sm-12">
              <div className="form-group" >
                <h3 ref="name">Name: {board.name}</h3>
                <h5>Lists: 10</h5>
                <h5>Items: 50</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col sm-6">
              <div className="form-group" >
                <button className="btn-danger" type="submit" >Remove</button>
              </div>
            </div>
          </div>

          
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(Board);
