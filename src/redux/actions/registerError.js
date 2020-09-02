import { REGISTER_ERROR } from '../types';

export const registerError = (errorMsg) => {
  return {
    type: REGISTER_ERROR,
    payload: {
      type: 'error',
      msg: errorMsg,
    },
  };
};
