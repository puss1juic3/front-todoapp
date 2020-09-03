import { REGISTER_ERROR } from '../types';

export const registerError = (errorMsg) => {
  return {
    type: REGISTER_ERROR,
    payload: {
      openSnackbar: true,
      type: 'error',
      msg: errorMsg,
    },
  };
};
