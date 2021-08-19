import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
class Navbar extends React.Component {
    render(): JSX.Element {
        return(
        <nav className={classes.nav}>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/news">News</NavLink></div>
            <div><NavLink to="/friends">Friends</NavLink></div>
            <div><NavLink to="/messages">Messages</NavLink></div>           
            <div><NavLink to="/settings">Settings</NavLink></div>
        </nav>
        );
    }
}
export default Navbar;