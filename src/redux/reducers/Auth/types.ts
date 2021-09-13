export interface LogIn{
    email:string,
    password:string
}
export interface Registration extends LogIn{
    username:string
}
export interface AuthState{
    isAuth:boolean,
    isRegistration:boolean,
    isLoading:boolean,
    error:string,
    authData: Registration
}
export enum AuthActionEnum{
 SET_AUTH_DATA='SET_AUTH_DATA',
 SET_IS_AUTH='SET_IS_AUTH',
 SET_ERROR='SET_ERROR',
 SET_IS_LOADING='SET_IS_LOADING',
 SET_IS_REGISTRATIONFORM='SET_IS_REGISTRATIONFORM'
}
export interface SetIsAuthAction{
    type:AuthActionEnum.SET_IS_AUTH,
    payload:boolean
}
export interface SetIsRegistrationAction{
    type:AuthActionEnum.SET_IS_REGISTRATIONFORM,
    payload:boolean
}
export interface SetErrorAction{
    type:AuthActionEnum.SET_ERROR,
    payload:string
}
export interface SetAuthDataAction{
    type:AuthActionEnum.SET_AUTH_DATA,
    payload:Registration
}
export interface SetIsLoadingAction{
    type:AuthActionEnum.SET_IS_LOADING,
    payload:boolean
}
export type AuthAction= SetAuthDataAction | SetErrorAction | SetIsAuthAction |SetIsLoadingAction | SetIsRegistrationAction;
