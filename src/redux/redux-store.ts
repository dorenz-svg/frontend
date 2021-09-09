import { applyMiddleware, combineReducers, createStore } from "redux";
import authorizationReducer from "./authorizationReducer";
import ThunkMiddleware  from "redux-thunk";
const reducers =combineReducers({
    authorizationState:authorizationReducer
});
const store= createStore(reducers,applyMiddleware(ThunkMiddleware));
type ReducerType=typeof reducers;
export type AppStateType=ReturnType<ReducerType>
export default store;