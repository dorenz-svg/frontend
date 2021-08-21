import { http } from './http';
interface DataServer {
    Token: string,
    UserName: string,
    message?:string
}
interface LogInRequest{
    email: string,
    password: string,
}
interface RegistrationRequest{
    username:string
}
export const registrate = async (request: LogInRequest & RegistrationRequest): Promise<string | undefined> => {
    const result = await http<DataServer, LogInRequest & RegistrationRequest>({
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
        return result.body?.message;
    }
};
export const logIn = async (request: LogInRequest): Promise<string | undefined> => {
    const result = await http<DataServer, LogInRequest>({
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
        return result.body?.message;
    }
};