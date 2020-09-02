import { registerError } from './registerError';
import { registerSuccess } from './registerSuccess';

export const registerUser = () => async (dispatch, getState) => {
  console.log('reg');

  const user = {
    email: getState().register.email.value,
    login: getState().register.login.value,
    password: getState().register.password.value,
  };

  //DEBUG
  console.log(JSON.stringify(user));

  await fetch('http://localhost:8080/users/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.ok) dispatch(registerSuccess());
    })
    .catch((response) => {
      if (!response.ok) dispatch(registerError('Could not connect to server'));
    });
};
