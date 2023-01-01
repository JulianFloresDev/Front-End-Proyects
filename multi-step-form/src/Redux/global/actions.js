import { SET_FORM_STEP, SET_PERSONAL_INFO, SET_PLAN_INFO, SET_ADD_INFO } from './constants';

export const setFormStep = (payload) => {
  return {
    type: SET_FORM_STEP,
    payload
  };
};

export const setPersonalInfo = (payload) => {
  return {
    type: SET_PERSONAL_INFO,
    payload
  };
};

export const setPlanInfo = (payload) => {
  return {
    type: SET_PLAN_INFO,
    payload
  };
};

export const setAddInfo = (payload) => {
  return {
    type: SET_ADD_INFO,
    payload
  };
};
