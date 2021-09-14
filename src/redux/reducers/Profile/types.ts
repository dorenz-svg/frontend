export interface IUser{
    username:string,
    id:string,
    phone:string,
    email:string
}
export interface Post{
    id:number,
    text:string,
    date:Date
}
export interface ProfileState{
user:IUser,
posts: Array<Post>,
error:string
}
export enum ProfileActionEnum{
SET_USER='SET_USER',
SET_ERROR='SET_ERROR'
}
export interface SetProfileDataAction{
    type:ProfileActionEnum.SET_USER,
    payload:ProfileState
}
export interface SetProfileErrorAction{
    type:ProfileActionEnum.SET_ERROR,
    payload:string
}
export type ProfileAction= SetProfileDataAction | SetProfileErrorAction ;