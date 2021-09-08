import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import { Route, Redirect } from "react-router-dom";
import React, { useState } from 'react';
import AuthorizationContainer from './components/Authorization/AuthorizationContainer';
import {MyProps}from './AppContainer';
function App(props:MyProps) {
  if (props.isAuthorized) {
    return (
      <>
        <div className="app-wrapper">
          <Header {...props} />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile} />
          </div>
        </div>
        <Redirect from='/' to='/home' />
      </>);
  } else {
    return (<div className="app-wrapper">
      <Header {...props}  />
      <AuthorizationContainer />
    </div>);
  }
}
export default App;
