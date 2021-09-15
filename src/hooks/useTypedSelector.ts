import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStateType} from "../redux/index";

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector