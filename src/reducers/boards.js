import { CREATE_LIST, DELETE_LIST,CREATE_BOARD,DELETE_BOARD} from '../actions';
import _ from 'lodash';
export default function(state=[], action){
  console.log(action);
  switch(action.type){
    
    case CREATE_BOARD:
      const b = action.payload;
      return [...state, {id: b.id,name: b.name,description: b.description,lists:[]}];
    case DELETE_BOARD:
      return state.filter((board)=>{        
        return board.id !== action.payload;
      })
    case CREATE_LIST:
      const l = action.payload;
      return 


      break;
    case DELETE_LIST:
      console.log("fetch boards reducer");
      break;
    default:
      return state;
  }
}