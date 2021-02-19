import React, {FormEvent, useState} from 'react';
import {Redirect} from 'react-router-dom';
import styles from "../Register/styles/register.module.scss";
import {Button, FormControl, TextField} from "@material-ui/core";

// import {login} from '../../actions';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import Form from '../helpers/Form'


type LoginPageProps = {
  isAuthenticated: boolean
}

const Login = ({isAuthenticated}: LoginPageProps) => {

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const {email, password} = loginForm;

  const onChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    if (!e.target) return
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // login({email,password});
  }

  //Redirect if logged in
  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
    <div className={styles.register__container}>
      <div className={styles.register__form}>
        <div className={styles.register__form_name}>Login</div>
        <FormControl onSubmit={onSubmit} className={styles.register__form_wrap}>
          <TextField required variant="outlined" label="Email" type="email" name="email" onChange={onChange} className={styles.register__input}/>
          <TextField required variant="outlined" label="Password" type="password" name="password" onChange={onChange} className={styles.register__input}/>
          <Button>Login</Button>
        </FormControl>
      </div>
    </div>
  )
}

// export default connect((state) => ({isAuthenticated:state.auth.isAuthenticated}), {login})(Login);

export default Login
