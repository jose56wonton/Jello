// Libraries
import React, { Component } from 'react';

// Styles
import '../style/paper.css';
import '../style/paperAdjusted.css'
import '../style/grid.css';

// Components
import Boards from './board/boards';

// Reducers

// Other


class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Jello</h1>
        </header>
        
        <Boards/> 
        
      </div>
    );
  }
}

export default App;
