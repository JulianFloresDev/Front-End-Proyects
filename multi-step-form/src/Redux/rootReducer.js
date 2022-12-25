import { combineReducers } from 'redux';
import globalReducer from 'Redux/global/reducer';

const rootReducer = combineReducers({
  global: globalReducer
});

export default rootReducer;
