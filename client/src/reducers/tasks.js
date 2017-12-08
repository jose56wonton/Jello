import { CREATE_TASK, DELETE_TASK, DELETE_TASKS, TOGGLE_TASK} from '../actions';

export default function(state=[], action){  
  switch(action.type){    
    case CREATE_TASK:
      const t = action.payload;
      return [...state, {id: t.id, listId:t.listId, boardId: t.boardId, name: t.name,completed: false}];
    case DELETE_TASK:
      return state.filter((task) => { return task.id !== action.payload;})  
    case DELETE_TASKS:
      return state.filter((task) => { return task.listId !== action.payload; })  
    case TOGGLE_TASK: 
      return state.map((task, i) => (task.id === action.payload.id ? { ...task, completed: !task.completed } : task))     
    default:
      return state;
  }
}