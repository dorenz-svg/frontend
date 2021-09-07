import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import AuthorizationForm from './components/Authorization/AuthorizationForm';
import Dialogs from './components/Dialogs/Dialogs'
import { Route, Redirect } from "react-router-dom";
import React, { useState } from 'react';
import { isPropertySignature } from 'typescript';
import AuthorizationContainer from './components/Authorization/AuthorizationContainer';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistarionForm, setRegistrationForm] = useState(false);
  const handleChangeForm = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLButtonElement;
    if (target.name === 'sign') {
      setRegistrationForm(false);
    } else {
      setRegistrationForm(true);
    }
  }
  if (isLoggedIn) {
    return (
      <>
        <div className="app-wrapper">
          <Header isLoggedIn={isLoggedIn} onChangeForm={handleChangeForm} />
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
      <Header isLoggedIn={isLoggedIn} onChangeForm={handleChangeForm} />
      <AuthorizationContainer />
    </div>);
  }
}
export default App;
