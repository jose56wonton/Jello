import {combineReducers} from 'redux';
import BoardReducer from './boards';
import ListReducer from './lists';
import TaskReducer from './tasks';
import UserReducer from './user';
const rootReducer = combineReducers({
  user: UserReducer
});

export default rootReducer;