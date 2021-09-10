import { instance } from "./api"
export interface Answer{
    ok:boolean,
    message?:string
}
export interface LogInRequest{
  email: string,
  password: string,
}
export interface RegistrationRequest extends LogInRequest{
  username:string
}
interface DataServer {
  Token?: string,
  UserName?: string,
  message?:string
}
export const authApi={
    registrate(state:RegistrationRequest){
        return instance.post<DataServer>('account/registration',{email:state.email,password:state.password,username:state.username})
        .then(res=>res.data)
    },
    logIn(state:LogInRequest){
        return instance.post<DataServer>('account/login',{email:state.email,password:state.password})
        .then(res=>{
          console.log(res.data)
        return res.data
        })
    }
}