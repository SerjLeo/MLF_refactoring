import React from 'react';
import {Redirect} from 'react-router-dom';
import styles from './styles/welcome.module.scss'
// import {connect} from 'react-redux';
// import {compose} from 'redux'

import {Button, Grid, Typography} from '@material-ui/core';
// import WithTranslation from '../translation/withTranslationHOC'
// import CustomLink from '../helpers/CustomLink'
// import PageLayout from '../layout/PageLayout'

type WelcomeProps = {
  isAuthenticated: boolean
  strings: Array<string>
}

const Welcome = ({isAuthenticated = false, strings}: WelcomeProps) => {

  if (isAuthenticated) {
    return <Redirect to="/dashboard"/>
  }

  return (
      <Grid container className={styles.container}>
        <Grid item lg={8} className={styles.sidePanel}>
          <div className={styles.image}> </div>
        </Grid>
        <Grid item lg={4} className={styles.gridItem}>
          <Typography variant="h1" className={styles.headTitle}>
            {/*{strings.welcomeText}*/}
            Welcome here
          </Typography>
          <div>
            {/*<CustomLink to='/login' style={{width: '100%'}}>*/}
            {/*  <Button variant="contained" style={{margin: 10}} color="primary" disableElevation>{strings.loginBtn}</Button>*/}
            {/*</CustomLink>*/}
            {/*<CustomLink to='/register'>*/}
            {/*  <Button style={{margin: 10}} variant="contained" color="primary" disableElevation>{strings.registerBtn}</Button>*/}
            {/*</CustomLink>*/}
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
