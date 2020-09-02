import { INPUT_CHANGED } from '../types';

export const inputChanged = (formName, value) => {
  return {
    type: INPUT_CHANGED,
    payload: {
      formName,
      value,
    },
  };
};
