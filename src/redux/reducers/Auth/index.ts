import { AuthAction, AuthActionEnum, AuthState, Registration } from "./types";
const initialState: AuthState = {
    isAuth: false,
    error: '',
    isLoading: false,
    authData: {} as Registration,
    isRegistration: false
}
export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH_DATA:
            return { ...state, authData: action.payload }
        case AuthActionEnum.SET_ERROR:
            return { ...state, error: action.payload }
        case AuthActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case AuthActionEnum.SET_IS_AUTH:
            return { ...state, isLoading: action.payload }
        case AuthActionEnum.SET_IS_REGISTRATIONFORM:
            return { ...state, isRegistration: action.payload }
        default:
            return state;

    }
}