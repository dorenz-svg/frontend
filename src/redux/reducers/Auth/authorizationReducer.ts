import { AppDispatch } from '../../index';
import { authApi} from '../../../api/auth-api';
import { AuthActionEnum, SetIsAuthAction, SetIsLoadingAction, SetAuthErrorAction, SetIsRegistrationAction } from './types';

export const AuthActionCreators={
    setIsAuth:(auth:boolean):SetIsAuthAction=>({type:AuthActionEnum.SET_IS_AUTH,payload:auth}),
    setIsLoading:(payload:boolean):SetIsLoadingAction=>({type:AuthActionEnum.SET_IS_LOADING,payload}),
    setError:(payload:string):SetAuthErrorAction=>({type:AuthActionEnum.SET_ERROR,payload}),
    setRegistration:(payload:boolean):SetIsRegistrationAction=>({type:AuthActionEnum.SET_IS_REGISTRATIONFORM,payload}),
    logIn:(email:string,password:string)=>async (dispatch:AppDispatch)=>{
        try{
            dispatch(AuthActionCreators.setIsLoading(true));
            const response = await authApi.logIn({email,password});
            if(response.Token){
                sessionStorage.setItem('Token',response.Token)
                dispatch(AuthActionCreators.setIsAuth(true))
            }else if(response.message){
                dispatch(AuthActionCreators.setError(response.message))
            }else{
                dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
            }
            dispatch(AuthActionCreators.setIsLoading(false));
        }catch(e){
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
        }
    },
    registration:(email:string,password:string,username:string)=> async(dispatch:AppDispatch)=>{
        try{
            dispatch(AuthActionCreators.setIsLoading(true));
            const response = await authApi.registrate({email,password,username});
            if(response.Token){
                sessionStorage.setItem('Token',response.Token)
                dispatch(AuthActionCreators.setIsAuth(true))
            }else if(response.message){
                dispatch(AuthActionCreators.setError(response.message))
            }else{
                dispatch(AuthActionCreators.setError('Произошла ошибка при регистрации'))
            }
            dispatch(AuthActionCreators.setIsLoading(false));
        }catch(e){
            dispatch(AuthActionCreators.setError('Произошла ошибка при регистрации'))
        }
    }
}