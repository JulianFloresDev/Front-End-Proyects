import { SET_FORM_STEP } from './constants';

export const setFormStep = (payload) => {
  return {
    type: SET_FORM_STEP,
    payload
  };
};
