import { instance } from "./api";
export interface DataDialogs{
    id: number,
    name:string
    message:{
        text:string,
        Time:Date,
        userName:string
    }
}
export interface DataUsersDialog{
    id:string,
    userName:string,
    email:string,
    phone:string
}
interface Request{
    userName:string,
    name:string
}
export const dialogsApi={
    getDialogs(){
        return instance.get<DataDialogs[]>('dialogs/get').then(res=>res.data)
    },
    createDialog(request:Request){
        return instance.post('dialogs',{ userId:request.userName,name:request.name})
    },
    deleteDialog(){
        return instance.delete('dialogs')
    },
    getUsers(id:number){
        return instance.get<DataUsersDialog[]>(`dialogs/getusers?id=${id}`).then(res=>res.data)
    }
}