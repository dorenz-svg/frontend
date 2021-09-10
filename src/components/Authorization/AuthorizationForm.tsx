import React from 'react';
import classes from './Authorization.module.css';
import {State} from '../../redux/authorizationReducer';
interface MyProps{
    state:State,
    blurHandler:(e:React.SyntheticEvent)=>void
    changeUsername:(e:React.SyntheticEvent)=>void,
    handleSubmit:(e:React.SyntheticEvent)=>void,
    changeEmail:(e:React.SyntheticEvent)=>void,
    changePassword:(e:React.SyntheticEvent)=>void,
}
const AuthorizationForm:React.FC<MyProps> = (props) => {
    const renderRegistrationForm=(isRegistrationForm: boolean | undefined)=> {
        if (isRegistrationForm) {
            return (
                <>
                <div className={classes.error}>{props.state.isUsernameDirty && props.state.usernameError}</div>               
                <p>
                    <label>
                        <input value={props.state.username} className={classes.inputs} placeholder='UserName' onBlur={props.blurHandler} name='username' type="text" onChange={props.changeUsername} />
                    </label>
                </p>
                </>
            );
        }
    }
    return (
        <div className={classes.centered}>
            <form onSubmit={props.handleSubmit}>
                <h1 className={classes.textcenter}>{props.state.isRegistrationForm === true ? 'Registration' : 'Sign in'}</h1>
                <div>{props.state.messageServer}</div>
                {renderRegistrationForm(props.state.isRegistrationForm)}
                <div className={classes.error}>{props.state.isEmailDirty && props.state.emailError}</div>
                <p >
                    <label>
                        <input value={props.state.email} className={classes.inputs} placeholder='Email' name='email' onBlur={props.blurHandler} type="text" onChange={props.changeEmail} />
                    </label>
                </p>
                <div className={classes.error}>{props.state.isPasswordDirty && props.state.passwordError}</div>
                <p>
                    <label>
                        <input value={props.state.password} className={classes.inputs} name='password' placeholder='Password' onBlur={props.blurHandler} type="password" onChange={props.changePassword} />
                    </label>
                </p>
                <button className={classes.buttonsubmit} type="submit">Отправить</button>
            </form>
        </div>
    );
}

export default AuthorizationForm;