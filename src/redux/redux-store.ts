import { combineReducers, createStore } from "redux";
import authorizationReducer from "./authorizationReducer";
const reducers =combineReducers({
    authorizationState:authorizationReducer
});
const store= createStore(reducers);
type ReducerType=typeof reducers;
export type AppStateType=ReturnType<ReducerType>
export default store;