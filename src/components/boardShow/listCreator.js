// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Styles
// Components

// Reducers

// 
import * as actions from '../../actions';
// Other


class ListCreator extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    //ownProps.match.params.name
    this.props.createList({
      boardId: this.props.boardId,
      id: Date.now(),
      name: document.getElementById('listName').value
    });
  }d
  render() {
    var cardStyles = {
      width: '12rem'
    };    
    return (
      <div className="card col sm-6 md-4" style={cardStyles}>
        <form className="card-body" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col sm-12">
              <div className="form-group" >
                <input id="listName" className="input-block" type="text" placeholder="List Name" />
              </div>
            </div>
          </div>          
          <div className="row">
            <div className="col sm-12">
              <button className="btn-success btn-block">Create List!</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state,ownProps){  
  return {boardId: ownProps.boardId};
}

export default connect(mapStateToProps, actions)(ListCreator);
