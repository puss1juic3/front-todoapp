import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';

import './Form.scss';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const Form = (props) => {
  return (
    <div className="form">
      <Paper>
        {props.serverResponse.error}
        <RegisterForm />
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    serverResponse: state.register.serverResponse,
  };
};

export default connect(mapStateToProps, null)(Form);
