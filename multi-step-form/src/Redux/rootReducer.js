import { combineReducers } from 'redux';
import globalReducer from './global/reducer';

const rootReducer = combineReducers({
  global: globalReducer
});

export default rootReducer;
