import { AuthAction, AuthActionEnum, AuthState} from "./types";
const initialState: AuthState = {
    isAuth: true,
    error: '',
    isLoading: false,
    isRegistration: false
}
export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
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