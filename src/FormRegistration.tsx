import React from 'react';
import { http } from './http';
interface MyState {
    email: string,
    password: string,
    username: string,
};
interface DataServer {
    Token: string,
    UserName: string,
}
class LogInForm extends React.Component<any, MyState> {
    changeEmail=(event: React.SyntheticEvent)=> {
        let target = event.target as HTMLInputElement;
        this.setState(()=>({ email: target.value }));
    }
    changeUsername=(event: React.SyntheticEvent)=> {
        let target = event.target as HTMLInputElement;       
        this.setState(()=>({ username: target.value }));
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
                    <label>
                        Username:
                        <input type="text"  onChange={this.changeUsername} />
                    </label>
                    <label>
                        Email:
                        <input type="text"  onChange={this.changeEmail} />
                    </label>
                    <label>
                        Password:
                        <input type="text"  onChange={this.changePassword} />
                    </label>
                    <input type="submit" value="Отправить" />
                </form>
            </div>
        );
    }
}
const getUnansweredQuestions = async (request: MyState): Promise<string> => {
    const result = await http<DataServer, MyState>({
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
export default LogInForm;