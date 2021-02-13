import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

// import {login} from '../../actions';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import Form from '../helpers/Form'


type LoginPageProps = {
  login: string
  isAuthenticated: boolean
}

const Login = ({login, isAuthenticated}: LoginPageProps) => {

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const {email, password} = loginForm;

  const fields = [
    {
      name: 'email',
      type: 'textInput',
      inputType: 'email',
      value: email
    },
    {
      name: 'password',
      type: 'textInput',
      inputType: 'password',
      value: password
    }
  ]

  const onChange = (e: InputEvent ) => {
    if (!e.target) return
    setLoginForm({
      ...loginForm,
      // [e.target.name]: e.target.value
    })
  }

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   login({email,password});
  // }

  //Redirect if logged in
  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
    // <Form
    //   onSubmit={onSubmit}
    //   onChange={onChange}
    //   type='login'
    //   redirectTo='/register'
    //   fields={fields}
    //   direction='column'
    // />
    <div>
      Login Form Here
    </div>
  )
}

// export default connect((state) => ({isAuthenticated:state.auth.isAuthenticated}), {login})(Login);

export default Login
