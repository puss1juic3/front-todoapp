import {
  INPUT_CHANGED,
  FORM_SUBMIT,
  VALIDATE_EMAIL,
  VALIDATE_LOGIN,
  VALIDATE_PASSWORD,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from '../types';

const initialState = {
  email: {
    value: '',
    valid: false,
    errorMessage: '',
  },
  login: {
    value: '',
    valid: false,
    errorMessage: '',
  },
  password: {
    value: '',
    valid: false,
    errorMessage: '',
  },
  serverResponse: {
    type: '',
    msg: '',
  },
};

export const register = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case VALIDATE_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case VALIDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case REGISTER_ERROR: {
      return {
        ...state,
        serverResponse: action.payload,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        serverResponse: {
          type: 'success',
          msg: 'Registration completed successfully',
        },
      };
    }
    default:
      return state;
  }
};
