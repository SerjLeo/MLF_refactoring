import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import styles from './styles/welcome.module.scss'
// import {connect} from 'react-redux';
// import {compose} from 'redux'

import {Button, Grid} from '@material-ui/core';
// import WithTranslation from '../translation/withTranslationHOC'
// import PageLayout from '../layout/PageLayout'

type WelcomeProps = {
  isAuthenticated: boolean
}

const Welcome = ({isAuthenticated = false}: WelcomeProps) => {

  if (isAuthenticated) {
    return <Redirect to="/dashboard"/>
  }

  return (
      <Grid container className={styles.welcome_container}>
        <Grid item lg={8} className={styles.side_panel}>
          <div className={styles.image}> </div>
        </Grid>
        <Grid item lg={4} className={styles.grid_item}>
          <h1 className={styles.head_title}>Welcome Here</h1>
          <div>
            <Link to={"/login"}>
              <Button variant="contained" style={{margin: 10}} color="primary" disableElevation>Login</Button>
            </Link>
            <Link to={"/register"}>
              <Button style={{margin: 10}} variant="contained" color="primary" disableElevation>Register</Button>
            </Link>
          </div>
        </Grid>
      </Grid>
  )
}
// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   // language: state.profile.language
// })
export default Welcome;
