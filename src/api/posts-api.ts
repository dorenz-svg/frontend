import { instance } from "./api";
interface DataServer{
 id:number,
 text:string,
 time:Date
}
export const postsApi={
    getPosts(id:string,count:number){
        return instance.get<DataServer>(`posts?id=${id}&count=${count}`).then(x=>x.data)
    },
    createPost(id:string,time:string,text:string){
        return instance.post('posts',{id,time,text})
    },
    deletePost(id:number){
        return instance.delete(`posts?id=${id}`)
    },
    updatePost(id:string,time:string,text:string){
        return instance.put('posts',{id,time,text})
    }
}