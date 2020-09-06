import React from 'react';
import './LoginForm.scss';
import RegisterPromo from '../RegisterPromo/RegisterPromo';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const LoginForm = () => {
  return (
    <form className="registerForm">
      <RegisterPromo />
      <div className="registerForm__inputs">
        <div className="registerForm__header">
          <p className="registerForm__title">Log in now</p>
          <p className="registerForm__subtitle">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            Don't have an account? Then <a href="#">register</a>
          </p>
        </div>
        <div className="registerForm__content">
          <TextField variant="outlined" label="E-mail" type="text" />
          <TextField variant="outlined" label="Password" type="password" />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
          <Button type="submit" color="primary">
            Log in
          </Button>
        </div>
        <div className="registerForm__footer">
          <p className="registerForm__footer-text">
            ©2015-2020 All Rights Reserved
          </p>
          <p className="registerForm__footer-text">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Privacy</a> and <a href="#">Terms</a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
