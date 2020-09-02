import { registerError } from './registerError';
import { registerSuccess } from './registerSuccess';

export const registerUser = () => async (dispatch, getState) => {
  console.log('reg');

  const user = {
    login: getState().register.login.value,
    password: getState().register.password.value,
    email: getState().register.email.value,
    roles: ['user'],
  };

  //DEBUG
  console.log(JSON.stringify(user));

  await fetch('http://localhost:8080/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  }).catch((response) => {
    if (!response.ok) {
      dispatch(registerError('Could not connect to server'));
    }
  });
};
