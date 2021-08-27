import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import AuthorizationForm from './components/Authorization/AuthorizationForm';
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route ,Redirect} from "react-router-dom";
import React, { useState } from 'react';

function Authorization() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistarionForm, setRegistrationForm] = useState(false);
  const handleChangeLogIn = () => {
    if (sessionStorage.getItem('Token') === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }
    const handleChangeForm = (e: React.SyntheticEvent) =>  {
      let target = e.target as HTMLButtonElement;
      if (target.name === 'sign') {
        setRegistrationForm(false);
      } else {
        setRegistrationForm(true);
      }
    }
    if (isLoggedIn) {
      return (<BrowserRouter>
        <div className="app-wrapper">
          <Header isLoggedIn={isLoggedIn} onChangeForm={handleChangeForm} />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile} />
          </div>
        </div>
        <Redirect from='/' to='/home'/>
      </BrowserRouter>);
    } else {
      return (<div className="app-wrapper">
        <Header isLoggedIn={isLoggedIn}  onChangeForm={handleChangeForm} />
        <AuthorizationForm onChangeLogIn={handleChangeLogIn} isRegistrationForm={isRegistarionForm} />
      </div>);
    }
  }
export default Authorization;
