import { http } from './http';
interface DataServer {
    Token: string,
    UserName: string,
    message?:string
}
export interface LogInRequest{
    email: string,
    password: string,
}
export interface RegistrationRequest extends LogInRequest{
    username:string
}
export interface Answer{
    ok:boolean,
    message?:string
}
export const registrate = async (request:  RegistrationRequest): Promise<Answer> => {
    const result = await http<DataServer, RegistrationRequest>({
        path: '/account/registration',
        method: 'post',
        body: {
            email: request.email,
            password: request.password,
            username: request.username,
        }
    });
    if (result.ok && result.body) {
        return {ok:true,message:result.body.Token};
        ;
    } else {
        return {ok:false,message:result.body?.message};
    }
};
export const logIn = async (request: LogInRequest): Promise<Answer> => {
    const result = await http<DataServer, LogInRequest>({
        path: '/account/login',
        method: 'post',
        body: {
            email: request.email,
            password: request.password,
        }
    });
    if (result.ok && result.body) {
        return {ok:true,message:result.body.Token};
    } else {
        return {ok:false,message:result.body?.message};
    }
};