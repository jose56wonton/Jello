import {CREATE_BOARD,DELETE_BOARD} from '../actions';

export default function(state=[], action){
  
  switch(action.type){    
    case CREATE_BOARD:
      const b = action.payload;
      return [...state, {id: b.id,name: b.name,description: b.description}];
    case DELETE_BOARD:
      return state.filter((board)=>{ return board.id !== action.payload;})    
    default:
      return state;
  }
}