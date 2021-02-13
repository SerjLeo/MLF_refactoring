import React, {ReactNode} from 'react'
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
import styles from './styles/pageLayout.module.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Login} from '../assets/svg/Login.svg'
import {ReactComponent as Person} from '../assets/svg/Person.svg'
import {ReactComponent as Logout} from '../assets/svg/Logout.svg'

type PageLayoutProps = {
  children: ReactNode
  isAuthenticated?: boolean
  loading?: boolean
}

const AppLayout = ({children, isAuthenticated = false, loading = false}: PageLayoutProps) => {

  const logout = () => {
    console.log('logout')
  }

  const userLinks = (
    <>
      <div className={styles.menu_item}>
        {/*<LangChange selectedLanguage={language} onLangChange={handleLangChange}/>*/}
      </div>
      <Link className={styles.menu_item} onClick={() => logout()} to="/login">
        <Logout className={styles.menu_item__icon}/>
        <div className={styles.menu_item__text}>Logout</div>
      </Link>
    </>
  );

  const guestLinks = (
    <>
      <div className={styles.menu_item}>
      {/*  <LangChange selectedLanguage={language} onLangChange={handleLangChange}/>*/}
      </div>
      <Link className={styles.menu_item} to='/register'>
        <Person className={styles.menu_item__icon}/>
        <div className={styles.menu_item__text}>Register</div>
      </Link>
      <Link className={styles.menu_item} to='/login'>
        <Login className={styles.menu_item__icon}/>
        <div className={styles.menu_item__text}>Login</div>
      </Link>
    </>
  );

  return (
    <>
      <AppBar position="absolute">
        <Toolbar>
          <Grid container direction='row' alignContent='center' alignItems='center'>
            <Grid item xs={6} className={styles.left_panel}>
              {/*{!loading && isAuthenticated && <Menu/>}*/}
              <Typography variant="h4" className={styles.title}>
                <Link to="/">MyLocalFinancier</Link>
              </Typography>
            </Grid>
            <Grid item xs={6} className={styles.right_panel}>
              {!loading && (isAuthenticated?userLinks:guestLinks) }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className="pageContainer">
        {children}
      </div>
    </>
  )
}

export default AppLayout
