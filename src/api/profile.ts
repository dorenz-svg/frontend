import { ProfileState } from './../redux/reducers/Profile/types';
import { instance } from "./api";
export const profileApi={
    getProfile(id:string){
        return instance.get<ProfileState>(`users?id=${id}`).then(x=>x.data)
    }
}