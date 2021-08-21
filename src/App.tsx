import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import AuthorizationForm from './AuthorizationForm';
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <Authorization isLoggedIn={localStorage.getItem('Token')!==null ? true : false}/>
  );
}
function Authorization(props:{isLoggedIn:boolean}){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return (<BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
        </div>
      </div>
    </BrowserRouter>);
  }else{
    return (<AuthorizationForm/>);
  }
}
export default App;
