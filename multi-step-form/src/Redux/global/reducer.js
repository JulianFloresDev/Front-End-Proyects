/* eslint-disable indent */
import { SET_FORM_STEP } from './constants';

const INITIAL_STATE = {
  step: 1
};

const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FORM_STEP:
      return {
        ...state,
        step: action.payload
      };
    default:
      return state;
  }
};

export default globalReducer;
