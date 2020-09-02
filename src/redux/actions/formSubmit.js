import { FORM_SUBMIT } from '../types';
import { validateInput } from './validateInput';

export const formSubmit = (event, state) => {
  event.preventDefault();

  return {
    type: FORM_SUBMIT,
  };
};
