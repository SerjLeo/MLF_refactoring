import React, {FormEvent, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, FormControl, TextField} from "@material-ui/core";
// import {connect} from 'react-redux';
// import {setAlert, register} from '../../actions';
// import Form from '../helpers/Form'
// import PageLayout from '../layout/PageLayout'
// {setAlert, register, isAuthenticated}

type RegisterProps = {
  isAuthenticated: boolean
}
const Register = ({isAuthenticated}: RegisterProps) => {
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    password: '',
    repeat_password: ''
  });
  const {name ,email, password, repeat_password} = registrationForm;


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setRegistrationForm({
    ...registrationForm,
    [e.target.name]: e.target.value
  })

  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (password !== repeat_password) {
      // setAlert('Passwords dont match', 'danger', 2000);
    } else {
      // register({name, email, password});
    }
  }


  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
    <FormControl onSubmit={onSubmit}>
      <TextField label="Name" name="name" onChange={onChange}/>
      <TextField label="Email" type="email" name="email" onChange={onChange}/>
      <TextField label="Password" type="password" name="password" onChange={onChange}/>
      <TextField label="Repeat password" type="password" name="repeat_password" onChange={onChange}/>
      <Button>Register</Button>
    </FormControl>
  )
}


// export default connect((state) => ({isAuthenticated: state.auth.isAuthenticated}), {setAlert,register})(Register);
export default Register;
