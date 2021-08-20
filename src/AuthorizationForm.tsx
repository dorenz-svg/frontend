import React from 'react';
import { http } from './http';
interface StateRegistration {
    username: string,
};
interface StateLogIn {
    email: string,
    password: string,
};
interface DataServer {
    Token: string,
    UserName: string,
}
class AuthorizationForm extends React.Component<{}, StateLogIn & StateRegistration & {isRegistrationForm:boolean} > {
    constructor(props:{}) {
        super(props);
       this.state={
           isRegistrationForm:false,
           password:'',
           email:'',
           username:''
    };   
    }
    changeEmail = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        this.setState(() => ({ email: target.value }));
    }
    changeUsername = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        this.setState(() => ({ username: target.value }));
    }
    changePassword = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        this.setState(() => ({ password: target.value }));
    }
    handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        let temp: string;
        if(this.state.isRegistrationForm){
            temp= await registrate(this.state);
        }
        else{
            temp=await logIn(this.state);
        }
        alert(temp);
    }
    renderRegistrationForm(isRegistrationForm: boolean | undefined) {
        if (isRegistrationForm){
            return (
                <label>
                    Username:
                    <input type="text" onChange={this.changeUsername} />
                </label>
            );
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderRegistrationForm(this.state.isRegistrationForm)}
                    <label>
                        Email:
                        <input type="text" onChange={this.changeEmail} />
                    </label>
                    <label>
                        Password:
                        <input type="text" onChange={this.changePassword} />
                    </label>
                    <input type="submit" value="Отправить" />
                </form>
            </div>
        );
    }
}
const registrate = async (request: StateLogIn & StateRegistration): Promise<string> => {
    const result = await http<DataServer, StateLogIn & StateRegistration>({
        path: '/account/registration',
        method: 'post',
        body: {
            email: request.email,
            password: request.password,
            username: request.username,
        }
    });
    if (result.ok && result.body) {
        return result.body.Token;
        ;
    } else {
        return "что то не так";
    }
};
const logIn = async (request: StateLogIn): Promise<string> => {
    const result = await http<DataServer, StateLogIn>({
        path: '/account/login',
        method: 'post',
        body: {
            email: request.email,
            password: request.password,
        }
    });
    if (result.ok && result.body) {
        return result.body.Token;
        ;
    } else {
        return "что то не так";
    }
};
export default AuthorizationForm;