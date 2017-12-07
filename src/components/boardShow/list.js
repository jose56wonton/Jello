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


class List extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  onDelete() {
    this.props.deleteList(this.props.list.id);
  }
  onAdd(){
    if(e.key==="Enter"){
      console.log("hereerqewre")
    }
  }
  
  render() {
    var cardStyles = {
      width: '12rem'
    };
    const list = this.props.list;
    if(!list)
      return null;
    console.log(this.props);
    return (      
      <div className="card col sm-6 md-4" style={cardStyles}>
        <div className="card-body">
          <p>{list.name}</p>
          <div className="row flex-center child-borders">
            <div className="sm-12 col">1</div>
            <div className="sm-12 col">2</div>
            <div className="sm-12 col">3</div>
            <div className="col sm-12">
              <form className="form-group">              
                <input className="input-block" onKeyPress={this.onAdd} type="text" />
              </form>
            </div>
          </div>
          <div className="row">
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
  return {list: ownProps.list}
}

export default connect(mapStateToProps, actions)(List);
