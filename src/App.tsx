import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import LogInForm from './FormRegistration';
function App() {
  return (
    <div className="app-wrapper">
      <LogInForm/>
      <Header/>
      <Navbar/>
      <Profile/>
      </div>
  );
}

export default App;
