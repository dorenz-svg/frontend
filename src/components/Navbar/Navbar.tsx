import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import { Layout, Menu } from 'antd';
const Navbar:React.FC=()=> {
        return(
        <Menu>
            <Menu.Item><NavLink to="/profile">Profile</NavLink></Menu.Item>
            <Menu.Item><NavLink to="/news">News</NavLink> </Menu.Item>
            <Menu.Item><NavLink to="/friends">Friends</NavLink></Menu.Item>
            <Menu.Item><NavLink to="/messages">Messages</NavLink></Menu.Item>
            <Menu.Item><NavLink to="/settings">Settings</NavLink></Menu.Item>         
        </Menu>
        );
}
export default Navbar;