import {combineReducers} from 'redux';
import BoardsReducer from './boards';
import ListReducer from './lists';

const rootReducer = combineReducers({
  boards: BoardsReducer,
  lists: ListReducer
});

export default rootReducer;