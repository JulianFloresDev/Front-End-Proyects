/* eslint-disable indent */
import { SET_FORM_STEP } from './constants';

const INITIAL_STATE = {
  step: 1,
  info: {
    personal: {
      name: '',
      email: '',
      phone: ''
    },
    plan: {
      arcade: {
        active: false,
        cost: 9
      },
      advanced: {
        active: false,
        cost: 12
      },
      pro: {
        active: false,
        cost: 15
      }
    },
    addOns: {
      serviceOnline: {
        active: false,
        cost: 1
      },
      storage: {
        active: false,
        cost: 2
      },
      customProfile: {
        active: false,
        cost: 2
      }
    }
  }
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
