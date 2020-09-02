import { VALIDATE_EMAIL, VALIDATE_LOGIN, VALIDATE_PASSWORD } from '../types';

export const validateInput = (inputName, inputValue) => {
  let valid = false;
  let errorMessage = '';

  switch (inputName) {
    case 'email': {
      const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

      valid = pattern.test(inputValue);

      if (!valid) errorMessage = 'Wrong email';

      return {
        type: VALIDATE_EMAIL,
        payload: {
          value: inputValue,
          valid,
          errorMessage,
        },
      };
    }
    case 'login': {
      const pattern = /^[a-z0-9_-]{3,16}$/;

      valid = pattern.test(inputValue);

      if (!valid) errorMessage = 'Wrong login';

      return {
        type: VALIDATE_LOGIN,
        payload: {
          value: inputValue,
          valid,
          errorMessage,
        },
      };
    }
    case 'password': {
      const pattern = /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/;

      valid = pattern.test(inputValue);

      if (!valid) errorMessage = 'Wrong password';

      return {
        type: VALIDATE_PASSWORD,
        payload: {
          value: inputValue,
          valid,
          errorMessage,
        },
      };
    }
  }
};
