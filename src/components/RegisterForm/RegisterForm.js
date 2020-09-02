import React from 'react';

import './RegisterForm.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/registerUser';
import { bindActionCreators } from 'redux';
import { validateInput } from '../../redux/actions/validateInput';
import { formSubmit } from '../../redux/actions/formSubmit';

import RegisterPromo from '../RegisterPromo/RegisterPromo';

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const RegisterForm = (props) => {
  const inputs = ['email', 'login', 'password'];

  const firstLetterUpper = (string) =>
    string[0].toUpperCase() + string.slice(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const validInputs = [];

    inputs.forEach((inputName) => {
      props.validateInput(inputName, props.register[inputName].value);

      if (props.register[inputName].valid) validInputs.push(inputName);
    });

    console.log(validInputs);

    if (validInputs.length === inputs.length) props.registerUser();
  };

  return (
    <form className="registerForm" onSubmit={(event) => handleSubmit(event)}>
      <Snackbar
        open={props.register.serverResponse.type.length > 0}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={props.register.serverResponse.type}>
          {props.register.serverResponse.msg}
        </Alert>
      </Snackbar>
      <div className="registerForm__inputs">
        <div className="registerForm__header">
          <p className="registerForm__title">Register now</p>
          <p className="registerForm__subtitle">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            Already have an account? Then <a href="#">log in</a>
          </p>
        </div>
        <div className="registerForm__content">
          {inputs.map((formName) => (
            <TextField
              key={formName}
              variant="outlined"
              label={firstLetterUpper(formName)}
              value={props.register[formName].value}
              type={formName === 'password' ? 'password' : 'text'}
              onChange={(event) =>
                props.validateInput(formName, event.target.value)
              }
              error={
                !props.register[formName].valid &&
                props.register[formName].errorMessage.length > 0
              }
              helperText={props.register[formName].errorMessage}
            />
          ))}

          <Button type="submit" color="primary">
            Register
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

      <RegisterPromo />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: bindActionCreators(registerUser, dispatch),

    formSubmit: bindActionCreators(formSubmit, dispatch),

    validateInput: bindActionCreators(validateInput, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    register: state.register,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
