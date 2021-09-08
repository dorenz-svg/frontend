const CHANGE_USER_NAME = "CHANGE_USER_NAME";
const CHANGE_PASSWORD = "CHANGE_PASSWORD";
const CHANGE_EMAIL = "CHANGE_EMAIL";
const CHANGE_IS_AUTHORIZED = "CHANGE_IS_AUTHORIZED";
const CHANGE_REGISTRATIONFORM = 'CHANGE_REGISTRATIONFORM';
const CHANGE_MESSAGE_SERVER = 'CHANGE_MESSAGE_SERVER';
const CHANGE_EMAIL_DIRTY = 'CHANGE_EMAIL_DIRTY';
const CHANGE_PASSWORD_DIRTY = 'CHANGE_PASSWORD_DIRTY';
const CHANGE_USERNAME_DIRTY = 'CHANGE_USERNAME_DIRTY';
const EMPTY_ERROR = 'не должен быть пустым';
export interface State {
    username?: string,
    isUsernameDirty?: boolean,
    email?: string,
    isEmailDirty?: boolean,
    password?: string,
    isPasswordDirty?: boolean,
    isAuthorized?: boolean,
    emailError?: string,
    passwordError?: string,
    usernameError?: string,
    isRegistrationForm?: boolean,
    messageServer?: string
}
export interface Action extends State {
    type: string
}
const inialization: State = {
    isEmailDirty: false,
    isPasswordDirty: false,
    isUsernameDirty: false,
    password: '',
    email: '',
    username: '',
    usernameError: EMPTY_ERROR,
    emailError: EMPTY_ERROR,
    passwordError: EMPTY_ERROR,
    isAuthorized: sessionStorage.getItem('Token')===null?false:true,
    isRegistrationForm: false,
    messageServer: ''
}
const authorizationReducer = (state: State = inialization, action: Action): State => {
    switch (action.type) {
        case CHANGE_USER_NAME:
            return {
                ...state,
                username: action.username,
                isUsernameDirty: action.isUsernameDirty,
                usernameError: action.username?.length === 0 ? EMPTY_ERROR : ''
            };
        case CHANGE_PASSWORD: {
            let error = '';
            if (!action.password?.match("(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}")) {
                error = 'пароль должен быть >6 символов иметь цифры, буквы заглавные и строчные и терминальные символы';
            }
            return {
                ...state,
                password: action.password,
                isPasswordDirty: action.isPasswordDirty,
                passwordError: action.password?.length !== 0 ? error : EMPTY_ERROR
            };
        }
        case CHANGE_EMAIL: {
            let error = '';
            if (!action.email?.match("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$")) {
                error = 'Email не корректный';
            }
            return {
                ...state,
                email: action.email,
                isEmailDirty: action.isEmailDirty,
                emailError: action.email?.length !== 0 ? error : EMPTY_ERROR
            };
        }
        case CHANGE_IS_AUTHORIZED:
            return {
                ...state,
                isAuthorized: true
            };
        case CHANGE_REGISTRATIONFORM:
            return {
                ...state,
                isRegistrationForm: !state.isRegistrationForm
            }
        case CHANGE_MESSAGE_SERVER:
            return {
                ...state,
                messageServer: action.messageServer
            }
        case CHANGE_EMAIL_DIRTY:
            return {
                ...state,
                isEmailDirty: true
            }
        case CHANGE_PASSWORD_DIRTY:
            return {
                ...state,
                isPasswordDirty: true
            }
        case CHANGE_USERNAME_DIRTY:
            return {
                ...state,
                isUsernameDirty: true
            }
        default:
            return state;

    }
}
export const UpdateUserNameCreator = (text: string, isDirty: boolean): Action => ({ type: CHANGE_USER_NAME, username: text, isUsernameDirty: isDirty })
export const UpdatePasswordCreator = (text: string, isDirty: boolean): Action => ({ type: CHANGE_PASSWORD, password: text, isPasswordDirty: isDirty })
export const UpdateEmailCreator = (text: string, isDirty: boolean): Action => ({ type: CHANGE_EMAIL, email: text, isEmailDirty: isDirty })
export const UpdateIsAuthorizedCreator = (): Action => ({ type: CHANGE_IS_AUTHORIZED })
export const UpdateEmailDirty = (): Action => ({ type: CHANGE_EMAIL_DIRTY })
export const UpdatePasswordDirty = (): Action => ({ type: CHANGE_PASSWORD_DIRTY })
export const UpdateUsernameDirty = (): Action => ({ type: CHANGE_USERNAME_DIRTY })
export const UpdateIsRegistrationForm = (): Action => ({ type: CHANGE_REGISTRATIONFORM });
export const UpdateMessageServer = (text: string): Action => ({ type: CHANGE_MESSAGE_SERVER, messageServer: text });
export default authorizationReducer;