import React from 'react';
import classes from './Header.module.css';
interface MyProps{
    onChangeForm: (e:React.SyntheticEvent)=>void,
    isLoggedIn:boolean
}
class Header extends React.Component<MyProps,{}> {
    renderButtons(){
        if(!this.props.isLoggedIn){
            return(<>
            <button name='sign' className={classes.buttonswitch} onClick={e=>this.props.onChangeForm(e)}>Sign in</button>
            <button name='regist' className={classes.buttonswitch} onClick={e=>this.props.onChangeForm(e)}>Registration</button>
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