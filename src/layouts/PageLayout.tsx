import React, {ReactNode} from 'react'
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
import styles from './styles/pageLayout.module.scss'
import {Link} from "react-router-dom";

type PageLayoutProps = {
  children: ReactNode
  isAuthenticated?: boolean
  loading?: boolean
}

const PageLayout = ({children, isAuthenticated = false, loading = false}: PageLayoutProps) => {

  const logout = () => {
    console.log('logout')
  }

  const userLinks = (
    <>
      <div className={styles.menu_item}>
        {/*<LangChange selectedLanguage={language} onLangChange={handleLangChange}/>*/}
      </div>
      {/*<CustomLink className={classes.menuItem} to='/' onClick={() => {logout()}}>*/}
      <Link className={styles.menu_item} onClick={() => logout()} to="/login">
        <img src={'@/assets/Login.svg'} alt=""/>
        Logout
      </Link>
      {/*  <LogoutIcon/>{' '}*/}
      {/*  <div className={classes.menuItemText}>{strings['Header'].logout}</div>*/}
      {/*</CustomLink>*/}
    </>
  );

  const guestLinks = (
    <>
      <div className={styles.menu_item}>
      {/*  <LangChange selectedLanguage={language} onLangChange={handleLangChange}/>*/}
      </div>
      <Link className={styles.menu_item} to='/register'>
      {/*  <PersonIcon/>{' '}*/}
      {/*  <div className={classes.menuItemText}>{strings['Header'].register}</div>*/}
      </Link>
      <Link className={styles.menu_item} to='/login'>
        <img src={'@/assets/Login.svg'} alt=""/>
        <div className={styles.menu_item__text}>Logout</div>
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

export default PageLayout
