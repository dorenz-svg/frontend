import { profileApi } from '../../../api/profile-api';
import { ProfileActionEnum, SetProfileErrorAction, ProfileState, SetProfileDataAction } from './types';
import { AppDispatch } from './../../index';
export const profileActionCreator={
    getProfile:(id:string='')=> async(dispatch:AppDispatch)=>{
        try{
            const response=await profileApi.getProfile(id);
            dispatch(profileActionCreator.setProfile(response))
        }catch(e){
            dispatch(profileActionCreator.setError('Произошла ошибка при регистрации'))
        }
    },
    setError:(payload:string):SetProfileErrorAction=>({type:ProfileActionEnum.SET_ERROR,payload}),
    setProfile:(payload:ProfileState):SetProfileDataAction=>({type:ProfileActionEnum.SET_USER,payload})

}