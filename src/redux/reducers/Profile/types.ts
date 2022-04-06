export interface IUser{
    UserName:string,
    Id:string,
    Email?:string,
    ProfilePhoto?:string
}
export interface ProfileState{
user:IUser,
error:string
}
export enum ProfileActionEnum{
SET_USER='SET_USER',
SET_ERROR='SET_ERROR'
}
export interface SetProfileDataAction{
    type:ProfileActionEnum.SET_USER,
    payload:IUser
}
export interface SetProfileErrorAction{
    type:ProfileActionEnum.SET_ERROR,
    payload:string
}
export type ProfileAction= SetProfileDataAction | SetProfileErrorAction ;