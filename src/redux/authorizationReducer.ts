const CHANGE_USER_NAME = "CHANGE_USER_NAME";
const CHANGE_PASSWORD = "CHANGE_PASSWORD";
const CHANGE_EMAIL = "CHANGE_EMAIL";
const CHANGE_IS_AUTHORIZED = "CHANGE_IS_AUTHORIZED";
interface State {
    username?: string,
    email?: string,
    password?: string,
    isAuthorized?: boolean
}
export interface Action extends State {
    type: string
}
const inialization :State={
    username: '',
    email: '',
    password: '',
    isAuthorized: false
}
const authorizationReducer = (state: State=inialization, action: Action ) => {
    switch (action.type) {
        case CHANGE_USER_NAME:
            return {...state,
            username:action.username};
        case CHANGE_PASSWORD:
            return {...state,
                password:action.password};
        case CHANGE_EMAIL:
            return {
                ...state,
                email:action.email
            };
        case CHANGE_IS_AUTHORIZED:
            return {...state,
            isAuthorized:true
            };
        default:
            return state;

    }
}
export const UpdateUserNameCreator = (text: string) => ({ type: CHANGE_USER_NAME, username: text })
export const UpdatePasswordCreator = (text: string) => ({ type: CHANGE_PASSWORD, password: text })
export const UpdateEmailCreator = (text: string) => ({ type: CHANGE_EMAIL, email: text })
export const UpdateIsAuthorizedCreator = () => ({ type: CHANGE_IS_AUTHORIZED })
export default authorizationReducer;