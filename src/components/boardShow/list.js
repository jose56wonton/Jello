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
    this.state={
      taskInput: ''
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  onDelete() {
    this.props.deleteList(this.props.list.id);
  }
  onAdd(e){
    if(e.key === "Enter"){
      this.props.createTask({
        listId: this.props.list.id,
        boardId: this.props.list.boardId,
        id: Date.now(),
        name: this.state.taskInput
      });
    }     
  }
  updateInputValue(e) {
    console.log("updatetaskinput")
    console.log(e.target.value);
    this.setState({
      taskInput: e.target.value
    });
  }
  onToggle(task){
    this.props.toggleTask(task);
  }
  renderTasks(){
    return this.props.tasks.map((task,key) =>{      
      if(this.props.list.id === task.listId){
        return (    
          <button key={key} onClick={() => this.onToggle(task)} className={`btn-block ${task.completed ? 'btn-primary' : 'btn-secondary'}`}>{task.name}</button>
       );
      }
    })
  }
  render() {
    var cardStyles = {
      width: '12rem'
    };
    const list = this.props.list;
    if(!list)
      return null;
    return (      
      <div className="card col sm-6 md-4" style={cardStyles}>
        <div className="card-body">
          <div className="row">
            <div className="col sm-6">
              <h4>{list.name}</h4>
            </div>
            <div className="col sm-6">
              <button onClick={this.onDelete} className=" btn-block btn-danger" type="submit" >X</button>
            </div>
          </div>          
          <div className="row flex-center child-borders">
            {this.renderTasks()}
            <div className="col sm-12 ">
              <div  className="form-group ">              
                <input onChange={evt => this.updateInputValue(evt)} onKeyPress={this.onAdd} className="input-block" type="text" />
              </div>
            </div>
          </div>
                 
        </div>
      </div>
    );
  }
}
function mapStateToProps(state,ownProps){
  return {list: ownProps.list,tasks: state.tasks};
}

export default connect(mapStateToProps, actions)(List);
