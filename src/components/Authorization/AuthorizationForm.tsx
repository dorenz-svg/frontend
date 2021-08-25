import React, { SyntheticEvent } from 'react';
import { logIn, registrate } from '../../AuthorizationData';
import {Answer} from '../../AuthorizationData';
import classes from './Authorization.module.css';
interface MyState{
    username: string,
    usernameDirty:boolean,
    usernameError:string,
    email: string,
    password: string,
    emailDirty: boolean,
    passwordDirty: boolean,
    emailError:string,
    passwordError:string
    isRegistrationForm: boolean,
    messageServer?:string | undefined
}
class AuthorizationForm extends React.Component<{}, MyState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isRegistrationForm: true,
            emailDirty:false,
            passwordDirty:false,
            usernameDirty:false,
            password:'',
            email:'',
            username:'',
            usernameError:'не должен быть пустым',
            emailError:'не должен быть пустым',
            passwordError:'не должен быть пустым'
        };
    }
    changeEmail = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        if (!target.value.match("^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$")) {
            this.setState(() => ({ emailError: 'Email не корректный' }));
        } else {
            this.setState(() => ({ emailError: '' }));
        }
        this.setState(() => ({ email: target.value }));
    }
    changeUsername = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        this.setState(() => ({ username: target.value }));
        if(target.value===''){
            this.setState(() => ({ usernameError: 'не должен быть пустым' }));
        }else{
            this.setState(() => ({ usernameError: '' }));
        }
    }
    changePassword = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        if (!target.value.match("(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}")) {
            this.setState(() => ({ passwordError: 'пароль должен быть >6 символов иметь цифры, буквы заглавные и строчные и терминальные символы' }));
        } else {
            this.setState(() => ({ passwordError: ''  }));
        }
        this.setState(() => ({ password: target.value }));
    }
    handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        let temp: Answer | undefined;
        if (this.state.emailDirty && this.state.passwordDirty &&!this.state.passwordError &&!this.state.emailError) {
            if (this.state.isRegistrationForm) {
                if (this.state.username !== '') {
                    temp = await registrate(this.state);
                }
            }
            else {
                temp = await logIn(this.state);
            }
            if (temp!==undefined && temp.ok === true) {
                sessionStorage.setItem('Token', temp.message!);
            } else if(temp!==undefined && temp.ok === false) {
                this.setState(() => ({ messageServer: temp?.message }));
            }
        }
    }
    renderRegistrationForm(isRegistrationForm: boolean | undefined) {
        if (isRegistrationForm) {
            return (
                <>               
                <p>
                    <label>
                        <input className={classes.inputs} placeholder='UserName' onBlur={e=>this.blurHandler(e)} name='username' type="text" onChange={this.changeUsername} />
                    </label>
                </p>
                </>
            );
        }
    }
    blurHandler= (e:SyntheticEvent)=>{
        let target = e.target as HTMLInputElement;
        switch(target.name){
            case'email':
            this.setState(() => ({ emailDirty: true }));
            break;
            case'password':
            this.setState(() => ({ passwordDirty: true }));
            break;
            case'username':
            this.setState(() => ({ usernameDirty: true }));
            break;
        }
    }
    render() {
        return (
            <div className={classes.centered}>
                <form  onSubmit={this.handleSubmit}>
                    <h1 className={classes.textcenter}>{this.state.isRegistrationForm === true ? 'Registration' : 'Sign in'}</h1>
                    <div>{this.state.messageServer}</div>
                    <div className={classes.error}>{this.state.usernameDirty && this.state.usernameError}</div>
                    {this.renderRegistrationForm(this.state.isRegistrationForm)}
                    <div className={classes.error}>{this.state.emailDirty && this.state.emailError}</div>
                    <p >
                        <label>
                            <input className={classes.inputs} placeholder='Email' name='email' onBlur={e=>this.blurHandler(e)} type="text" onChange={this.changeEmail} />
                        </label>
                    </p>
                    <div className={classes.error}>{this.state.passwordDirty && this.state.passwordError}</div>
                    <p>
                        <label>
                            <input className={classes.inputs} name='password' placeholder='Password' onBlur={e=>this.blurHandler(e)} type="password" onChange={this.changePassword} />
                        </label>
                    </p>
                        <button type="submit">Отправить</button>
                </form>
            </div>
        );
    }
}

export default AuthorizationForm;