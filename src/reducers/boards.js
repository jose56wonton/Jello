import {FETCH_BOARDS,FETCH_BOARD,CREATE_BOARD,DELETE_BOARD} from '../actions';
import _ from 'lodash';
export default function(state=[], action){
  console.log(action);
  switch(action.type){
    
    case CREATE_BOARD:
      return [...state, {name: action.payload.name}];
    case DELETE_BOARD:
      return state.filter((board)=>{
        console.log(board);
        console.log(action.payload.name);
        return board.name !== action.payload.name
      })

    case FETCH_BOARD:
      console.log("fetch board reducer");
      break;

    case FETCH_BOARDS:
      console.log("fetch boards reducer");
      break;
    default:
      return state;
  }
}