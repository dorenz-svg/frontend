import React from 'react';
class Navbar extends React.Component {
    render(): JSX.Element {
        return(
        <nav className="nav">
            <div><a href="/Profile">Profile</a></div>
            <div><a href="/News">News</a></div>
            <div><a href="/Friends">Friends</a></div>
            <div><a href="/Messages">Messages</a></div>           
            <div><a href="/Settings">Settings</a></div>
        </nav>
        );
    }
}
export default Navbar;