import { IUser } from './../redux/reducers/Profile/types';
import { ProfileState } from '../redux/reducers/Profile/types';
import { instance } from "./api";
export const profileApi={
    getProfile(id:string){
        var temp = instance.get<IUser>(`users?id=${id}`).then(x=>x.data)
        return temp
    },
    updatePhoto(){
        
    }
}