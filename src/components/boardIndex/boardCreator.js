// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Styles
// Components

// Reducers

// 
import * as actions from '../../actions';
// Other


class BoardCreator extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.createBoard({ id: Date.now(),
                             name: document.getElementById('name').value,
                             description: document.getElementById('description').value});
   
  } 
  render() {
   
    return (      
      <div className="card">
          <form className="card-body" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col sm-12">
                <div className="form-group" >
                  <input id="name" className="input-block" type="text" placeholder="Board Name" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col sm-12">
                <div className="form-group" >
                  <textarea id="description" className="input-block" placeholder="Board Description"></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col sm-12">
                <button className="btn-success btn-block">Create Board!</button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default connect(null,actions)(BoardCreator);
