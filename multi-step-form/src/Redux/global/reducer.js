/* eslint-disable indent */
import {
  SET_FORM_STEP,
  SET_PERSONAL_INFO,
  SET_PLAN_TYPE,
  SET_PLAN_INFO,
  SET_ADD_INFO
} from './constants';

const INITIAL_STATE = {
  step: 1,
  personalInfo: {
    name: '',
    email: '',
    phone: ''
  },
  planInfo: {
    monthly: true,
    yearly: false,
    arcade: {
      active: true,
      monthly: 9,
      yearly: 90
    },
    advanced: {
      active: false,
      monthly: 12,
      yearly: 120
    },
    pro: {
      active: false,
      monthly: 15,
      yearly: 150
    }
  },
  addInfo: {
    online: {
      service: 'Online service',
      description: 'Access to multiplayer games',
      active: false,
      monthly: 2,
      yearly: 10
    },
    storage: {
      service: 'Large storage',
      description: 'Extra 1TB of cloud save',
      active: false,
      monthly: 2,
      yearly: 20
    },
    profile: {
      service: 'Customizable profile',
      description: 'Custom theme on your profile',
      active: false,
      monthly: 2,
      yearly: 20
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
    case SET_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: { ...action.payload }
      };
    case SET_PLAN_TYPE:
      return {
        ...state,
        planInfo: {
          ...state.planInfo,
          monthly: !action.payload,
          yearly: action.payload
        }
      };
    case SET_PLAN_INFO:
      return {
        ...state,
        planInfo: {
          ...state.planInfo,
          arcade: {
            ...state.planInfo.arcade,
            active: action.payload.arcade
          },
          advanced: {
            ...state.planInfo.advanced,
            active: action.payload.advanced
          },
          pro: {
            ...state.planInfo.pro,
            active: action.payload.pro
          }
        }
      };
    case SET_ADD_INFO:
      return {
        ...state,
        addInfo: {
          ...state.addInfo,
          [action.payload.name]: {
            ...state.addInfo[action.payload.name],
            active: action.payload.state
          }
        }
      };
    default:
      return state;
  }
};

export default globalReducer;
