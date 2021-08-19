import { stringify } from 'querystring';
import React from 'react';
import { http } from './http';
interface MyState {
    email: string,
    password: string,
};
interface DataServer {
    Token: string,
    UserName: string,
}
class SignInForm extends React.Component<any, MyState> {
    changeEmail=(event: React.SyntheticEvent)=> {
        let target = event.target as HTMLInputElement;
        this.setState(()=>({ email: target.value }));
    }
    changePassword=(event: React.SyntheticEvent)=> {
        let target = event.target as HTMLInputElement;
        this.setState(()=>({ password: target.value }));
    }
    handleSubmit=async (event: React.SyntheticEvent)=>  {
        event.preventDefault();
        const temp=await getUnansweredQuestions(this.state);
        alert(temp);    
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label>
                        Email:
                        <input type="text"  onChange={this.changeEmail} />
                    </label>
                    </div>
                    <div>
                    <label>
                        Password:
                        <input type="text"  onChange={this.changePassword} />
                    </label>
                    <input type="submit" value="Отправить" />
                    </div>
                </form>
            </div>
        );
    }
}
const getUnansweredQuestions = async (request: MyState): Promise<string> => {
    const result = await http<DataServer, MyState>({
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
export default SignInForm;