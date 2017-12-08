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
    this.onCreate = this.onCreate.bind(this);
  }
  onCreate(e) {
    e.preventDefault();
    this.props.createList({
      boardId: this.props.boardId,
      id: Date.now(),
      name: document.getElementById('listName').value
    });
  }
  render() {        
    return (
      <div className="card">
        <form className="card-body" >
          <div className="row">
            <div className="col sm-12">
              <div className="form-group" >
                <input id="listName" className="input-block" type="text" placeholder="List Name" />
              </div>
            </div>
          </div>          
          <div className="row">
            <div className="col sm-12">
              <button onClick={this.onCreate} className="btn-success btn-block">Create List!</button>
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
