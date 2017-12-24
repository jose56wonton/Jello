// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// Styles
import '../style/paper.css';
import '../style/paperAdjusted.css'
import '../style/grid.css';

class Login extends Component {
  constructor() {
    super();
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin(e){
    e.preventDefault();
    console.log(document.getElementById('login').value);
    this.props.login({
      user: document.getElementById('login').value
    });
  }
  render() {
    return (
      <div className="container">
        <header>
          <div className="row">
            <div className="col sm-12">
              <h1 className="">Jello</h1>
            </div>
          </div>
          <div className="row flex-center">
            <div className="sm-10 md-6 col">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col sm-12">
                      <h4>Identify Yourself</h4>
                    </div>
                  </div>
                  <div className="row flex-center">
                    <div className="col sm-12">
                      <div className="form-group" >
                        <input id="login" className="input-block" type="text" placeholder="User" />
                      </div>
                    </div>
                    <div className="col sm-12">
                      <button onClick={this.onLogin}  className="btn-success btn-block">Enter!</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col sm-12">
                      <p>This is not secure at all! I will learn auth later.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default connect(null,actions)(Login);
