// Libraries
import React, { Component } from 'react';

// Styles
import '../style/paper.css';
import '../style/paperAdjusted.css'
import '../style/grid.css';

// Components
import Boards from './boardIndex/boards';

// Reducers

// Other


class BoardIndex extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="row">
            <div className="col sm-12">
              <h1 className="">Jello</h1>
            </div>            
          </div>
        </header>        
        <Boards/>
        <div className="footer"/>
      </div>
    );
  }
}

export default BoardIndex;
