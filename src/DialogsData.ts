import { http } from './http';
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
    userId:string,
    name:string
}
export const getDialogs = async (): Promise<DataDialogs[]> => {
    const result = await http<DataDialogs[]>({
        path: '/dialogs/get',
    });
    if (result.ok && result.body) {
        return result.body;
    } else {
        return [];
    }
};
export const createDialog = async (request:Request): Promise<boolean> => {
    const result = await http<void,Request>({
        path: '/dialogs',
        method:'post',
        body:{
            userId:request.userId,
            name:request.name
        }
    });
    if (result.ok ) {
        return true;
    } else {
        return false;
    }
};
export const deleteDialog = async (): Promise<boolean> => {
    const result = await http<DataDialogs[]>({
        path: '/dialogs',
        method: 'delete'
    });
    if (result.ok ) {
        return true;
    } else {
        return false;
    }
};
export const getUsers = async (id:number): Promise<DataUsersDialog[]> => {
    const result = await http<DataUsersDialog[]>({
        path: `/dialogs/getusers?id=${id}`,
        method: 'get'
    });
    if (result.ok && result.body) {
        return result.body;
    } else {
        return [];
    }
};