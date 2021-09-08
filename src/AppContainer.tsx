import { connect } from 'react-redux';
import React from "react";
import App from "./App";
import { AppStateType } from "./redux/redux-store";
import {UpdateIsAuthorizedCreator} from './redux/authorizationReducer';
const mapStateToProps=(state:AppStateType)=>{
    return{
    isAuthorized:state.authorizationState.isAuthorized
    }
}
export interface MyProps{
    isAuthorized?:boolean,
    UpdateIsAuthorizedCreator:()=>void
}
const AppContainer: React.FC<MyProps> = (props) =>{
return(<App {...props}/>);
};
export default connect(mapStateToProps,{UpdateIsAuthorizedCreator})(AppContainer);