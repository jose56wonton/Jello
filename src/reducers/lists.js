import { CREATE_LIST, DELETE_LIST} from '../actions';

export default function(state=[], action){  
  switch(action.type){    
    case CREATE_LIST:
      const l = action.payload;   
      return [...state, {id: l.id,boardId: l.boardId, name: l.name}];
    case DELETE_LIST:
      return state.filter((list)=>{ return list.id !== action.payload;})    
    default:
      return state;
  }
}