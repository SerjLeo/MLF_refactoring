import './styles/app.scss'
import React, {useEffect} from 'react';
//custom scrollbar

// import Header from '../header';
// import Footer from '../footer/Footer';
// import {
//   LandingPage,
//   Dashboard,
//   AllTransactions,
//   IncomeCatalog,
//   Analytics,
//   CategoriesAnalyticsPage,
//   IncomePage,
//   CategoryPage,
//   CategoriesCatalog,
//   TypeAnalyticsPage,
//   IncomesAnalyticsPage
// } from '../pages';
// import {Login, Register, Confirm} from '../auth';
// import {Alert} from '../Errors';

import {Route, Switch} from 'react-router-dom';
// import setAuthToken from '../../utils/setAuthToken';
// import {loadUser} from '../../actions';
// import PrivateRoute from '../routes/PrivateRoute'
// import {connect} from 'react-redux'
import {CssBaseline} from '@material-ui/core';
import AppLayout from "./layouts/AppLayout";
import Welcome from './pages/Welcome/index'
import Login from './pages/Login/index'
import Register from './pages/Register/index'

// import Background from '../../public/images/background.jpg';
// import Page404 from "../Errors/Page404";

// if (localStorage.token) {
//   setAuthToken(localStorage.token)
// }

const App = () => {

  // useEffect(() => {
  //   loadUser();
  // },[loadUser]);

  return (
    <>
      <CssBaseline/>
      <div className="appContainer">
        <AppLayout>
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
        </AppLayout>
        {/*    <Route exact path='/' component={LandingPage}/>*/}
        {/*    <Route exact path='/confirm/:userID'  component={Confirm}/>*/}

        {/*    <PrivateRoute exact path='/dashboard' component={Dashboard}/>*/}
        {/*    <PrivateRoute exact path='/transactions' component={AllTransactions}/>*/}
        {/*    <PrivateRoute exact path='/incomes' component={IncomeCatalog}/>*/}
        {/*    <PrivateRoute exact path='/categories' component={CategoriesCatalog}/>*/}
        {/*    <PrivateRoute exact path='/incomes/:incomeID' component={IncomePage}/>*/}
        {/*    <PrivateRoute exact path='/categories/:categoryID' component={CategoryPage}/>*/}
        {/*    <PrivateRoute exact path='/analytics' component={Analytics}/>*/}
        {/*    <PrivateRoute exact path='/analytics/categories' component={CategoriesAnalyticsPage}/>*/}
        {/*    <PrivateRoute exact path='/analytics/incomes' component={IncomesAnalyticsPage}/>*/}
        {/*    <PrivateRoute exact path='/analytics/types' component={TypeAnalyticsPage}/>*/}
        {/*    <Route component={Page404} />*/}
        {/*  <Footer/>*/}
        {/*  <Alert/>*/}
        {/*</SimpleBar>*/}
      </div>
    </>
  )
}

export default App;
