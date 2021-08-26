import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import AuthorizationForm from './components/Authorization/AuthorizationForm';
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState } from 'react';
function App() {
  return (
    <Authorization isLoggedIn={sessionStorage.getItem('Token')!==null ? true : false}/>
  );
}
function Authorization(props:{isLoggedIn:boolean}){
  const isLoggedIn = props.isLoggedIn;
  const[isRegistarionForm,setRegistrationForm]=useState(false);
  const handleChangeForm=(e:React.SyntheticEvent)=>{
    let target = e.target as HTMLButtonElement;
    if(target.name==='sign'){
      setRegistrationForm(false);
    }else{
      setRegistrationForm(true);
    }
  }
  if(isLoggedIn){
    return (<BrowserRouter>
      <div className="app-wrapper">
        <Header isLoggedIn={isLoggedIn} onChangeForm={handleChangeForm} />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
        </div>
      </div>
    </BrowserRouter>);
  }else{
    return (<div className="app-wrapper">
    <Header isLoggedIn={isLoggedIn} onChangeForm={handleChangeForm}/>
    <AuthorizationForm isRegistrationForm={isRegistarionForm}/>
    </div>);
  }
}
export default App;
