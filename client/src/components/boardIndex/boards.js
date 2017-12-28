// Libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import StackGrid from "react-stack-grid";
// Styles
// Components
import BoardCreator from "./boardCreator";
import Board from "./board";
// Reducers

// Actions

// Other

class Boards extends Component {
  renderBoards() {
    return this.props.boards.map((board, key) => {
      return <Board grid={this.grid} key={key} board={board} />;
    });
  }
  render() {
    return (
      <StackGrid gridRef={grid => (this.grid = grid)} columnWidth={315}>
        {this.renderBoards()}
        <BoardCreator key={Date.now()} />
      </StackGrid>
    );
  }
}
function mapStateToProps(state) {
  return { boards: state.boards };
}
export default connect(mapStateToProps)(Boards);
