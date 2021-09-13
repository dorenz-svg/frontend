export const rules={
    required: (message: string = "Обязательное поле") => ({
        required: true,
        message
    }),
    validPassword:(message:string="Некорректный пароль")=>()=>({
        validator(_:any,value:string){
            if(!value.match("(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}"))
            return Promise.resolve()
            else
            return Promise.reject(new Error(message))
        }
    }),
}