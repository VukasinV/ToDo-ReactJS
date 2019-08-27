import { combineReducers } from 'redux';
import counter from './counterReducer';
import isLogged from './isLoggedReducer';

const rootReducer = combineReducers({
  counter,
  isLogged
});

export default rootReducer;
