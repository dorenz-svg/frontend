import React from 'react';
import classes from './Header.module.css';
class Header extends React.Component {
    render(): JSX.Element {
        return (
        <header className={classes.header}>
            MyNetwork
        </header>
        );
    }
}
export default Header;