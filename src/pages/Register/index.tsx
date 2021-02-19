import React, {FormEvent, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, FormControl, TextField} from "@material-ui/core";
import styles from './styles/register.module.scss'
// import {connect} from 'react-redux';
// import {setAlert, register} from '../../actions';
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
    <div className={styles.register__container}>
      <div className={styles.register__form}>
        <div className={styles.register__form_name}>Register</div>
        <FormControl onSubmit={onSubmit} className={styles.register__form_wrap}>
          <TextField required variant="outlined" label="Name" name="name" onChange={onChange} className={styles.register__input}/>
          <TextField required variant="outlined" label="Email" type="email" name="email" onChange={onChange} className={styles.register__input}/>
          <TextField required variant="outlined" label="Password" type="password" name="password" onChange={onChange} className={styles.register__input}/>
          <TextField required variant="outlined" label="Repeat password" type="password" name="repeat_password" onChange={onChange} className={styles.register__input}/>
          <Button>Register</Button>
        </FormControl>
      </div>
    </div>
  )
}


// export default connect((state) => ({isAuthenticated: state.auth.isAuthenticated}), {setAlert,register})(Register);
export default Register;
