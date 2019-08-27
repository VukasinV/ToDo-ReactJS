import counter from './counter';
import isLogged from './isLogged';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter,
  isLogged
});

export default rootReducer;
