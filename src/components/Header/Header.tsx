import React from 'react';
import classes from './Header.module.css';
import {MyProps} from '../../AppContainer';
class Header extends React.Component<MyProps,{}> {
    renderButtons(){
        if(!this.props.isAuthorized){
            return(<>
            <button name='sign' className={classes.buttonswitch} >Sign in</button>
            <button name='regist' className={classes.buttonswitch} >Registration</button>
            </>);
        }
    }
    render(): JSX.Element {
        return (
        <header className={classes.header}>
            <span className={classes.colortext} >MyNetwork</span> 
            <span className={classes.item}>
            {this.renderButtons()}
            </span>
        </header>
        );
    }
}
export default Header;