import { ProfileState, IUser, Post, ProfileAction, ProfileActionEnum } from './types';
const initialState:ProfileState={
    user: {} as IUser,
    posts:[] as Array<Post>,
    error:''
}
export default function profileReducer(state=initialState,action:ProfileAction):ProfileState{
    switch(action.type){
        case ProfileActionEnum.SET_USER:
            return {...state,user:action.payload.user,posts:action.payload.posts}
        case ProfileActionEnum.SET_ERROR:
            return {...state,error:action.payload}
        default:
            return state;
    }
}