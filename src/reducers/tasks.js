import {CREATE_TASK,DELETE_TASK} from '../actions';
import _ from 'lodash';
export default function(state=[], action){
  
  switch(action.type){    
    case CREATE_TASK:
      const t = action.payload;
      return [...state, {id: t.id, listId:t.listId, boardId: t.boardId, name: t.name,completed: false}];
    case DELETE_TASK:
      return state.filter((board)=>{ return board.id !== action.payload;})    
    default:
      return state;
  }
}