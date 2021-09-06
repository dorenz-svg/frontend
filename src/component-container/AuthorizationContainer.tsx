import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import AuthorizationForm from '.././components/Authorization/AuthorizationForm';
import {AppStateType} from '../redux/redux-store'
import {Action,UpdateEmailCreator,UpdatePasswordCreator,UpdateUserNameCreator} from '../redux/authorizationReducer';
const mapStateToProps=(state:AppStateType)=>{
return{
    username:state.authorizationState.username,
    password:state.authorizationState.password,
    email:state.authorizationState.email,
    isAuthorized:state.authorizationState.isAuthorized
}
}

const mapDispatchToProps=(dispatch:Dispatch<Action>)=>{
    return{
    onChangeEmail:(text:string)=>{
        dispatch(UpdateEmailCreator(text));
    },
    onChangePassword:(text:string)=>{
        dispatch(UpdatePasswordCreator(text));
    },
    onChangeUserName:(text:string)=>{
        dispatch(UpdateUserNameCreator(text));
    },
}
}
const AuthorizationContainer=connect(mapStateToProps,mapDispatchToProps)(AuthorizationForm);
export default AuthorizationContainer;