import { profileApi } from '../../../api/profile-api';
import { ProfileActionEnum, SetProfileErrorAction, ProfileState, SetProfileDataAction, IUser } from './types';
import { AppDispatch } from './../../index';
export const profileActionCreator={
    getProfile:(id:string='')=> async(dispatch:AppDispatch)=>{
        try{
            const response = await profileApi.getProfile(id) as IUser;
            debugger
            dispatch(profileActionCreator.setProfile(response))
        }catch(e){
            dispatch(profileActionCreator.setError('Произошла ошибка при регистрации'))
        }
    },
    setError:(payload:string):SetProfileErrorAction=>({type:ProfileActionEnum.SET_ERROR,payload}),
    setProfile:(payload:IUser):SetProfileDataAction=>({type:ProfileActionEnum.SET_USER,payload})

}