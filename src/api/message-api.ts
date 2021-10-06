import { instance } from "./api";
interface DataMessage{
    id:number,
    text: string,
    time:Date,
    userName:string,
    isChecked:boolean,
    path:Array<string>
}
interface PostMessage{
    idDialog:number,
    message:string,
    time:Date,
    idSender:string,
}
export const messageApi={
    getMessage(idDialog:number,count:number){
        instance.get<DataMessage[]>(`Message?idDialog=${idDialog}&count=${count}`).then(res=>res.data)
    },
    postMessage(state:PostMessage){
        instance.post('Message',{idDialog:state.idDialog,message:state.message,time:state.time,idSender:state.idSender})
    },
    deleteMessage(id:number){
        instance.delete(`Message?id=${id}`)
    },
    putMessage(state:PostMessage){
        instance.put('Message',{idDialog:state.idDialog,message:state.message,time:state.time,idSender:state.idSender})
    }

}