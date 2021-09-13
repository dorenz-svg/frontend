import { applyMiddleware, combineReducers, createStore} from "redux";
import ThunkMiddleware  from "redux-thunk";
import reducers from "./reducers";
const rootDeducer =combineReducers(reducers);
const store= createStore(rootDeducer,applyMiddleware(ThunkMiddleware));
export type AppStateType=ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;
export default store;