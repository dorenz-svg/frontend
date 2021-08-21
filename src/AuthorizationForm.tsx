import React from 'react';
import { logIn, registrate } from './AuthorizationData';
interface StateRegistration {
    username: string,
};
interface StateLogIn {
    email: string,
    password: string,
};
class AuthorizationForm extends React.Component<{}, StateLogIn & StateRegistration & { isRegistrationForm: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isRegistrationForm: false,
            password: '',
            email: '',
            username: ''
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
        let temp: string | undefined;
        if (this.state.isRegistrationForm) {
            temp = await registrate(this.state);
        }
        else {
            temp = await logIn(this.state);
        }
        if (temp !== undefined) {
            localStorage.setItem('Token', temp);
        } else {

        }
    }
    renderRegistrationForm(isRegistrationForm: boolean | undefined) {
        if (isRegistrationForm) {
            return (
                <div>
                    <label>
                        Username:
                        <input type="text" onChange={this.changeUsername} />
                    </label>
                </div>
            );
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.state.isRegistrationForm === true ? 'Registration' : 'Sign in'}</h1>
                    {this.renderRegistrationForm(this.state.isRegistrationForm)}
                    <div>
                        <label>
                            Email:
                            <input type="text" onChange={this.changeEmail} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="password" onChange={this.changePassword} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Отправить" />
                    </div>
                </form>
            </div>
        );
    }
}

export default AuthorizationForm;