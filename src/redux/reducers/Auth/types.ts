
export interface AuthState{
    isAuth:boolean,
    isRegistration:boolean,
    isLoading:boolean,
    error:string,
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
export interface SetAuthErrorAction{
    type:AuthActionEnum.SET_ERROR,
    payload:string
}
export interface SetIsLoadingAction{
    type:AuthActionEnum.SET_IS_LOADING,
    payload:boolean
}
export type AuthAction=  SetAuthErrorAction | SetIsAuthAction |SetIsLoadingAction | SetIsRegistrationAction;
