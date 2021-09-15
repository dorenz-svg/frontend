import { AuthActionCreators } from "./Auth/authorizationReducer";
import { profileActionCreator } from "./Profile/profileReducer";

export const allActionCreators={
    ...AuthActionCreators,
    ...profileActionCreator
}