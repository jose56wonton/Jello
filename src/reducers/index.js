import {combineReducers} from 'redux';
import BoardsReducer from './boards';

const rootReducer = combineReducers({
  boards: BoardsReducer
});

export default rootReducer;