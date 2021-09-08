import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import AuthorizationForm from './AuthorizationForm';
import { AppStateType } from '../../redux/redux-store'
import { Answer } from '../../AuthorizationData';
import { logIn, registrate } from '../../AuthorizationData';
import {UpdateEmailCreator,UpdateIsAuthorizedCreator, UpdatePasswordCreator, UpdateUserNameCreator, State, UpdateIsRegistrationForm, UpdateMessageServer, UpdateEmailDirty, UpdatePasswordDirty, UpdateUsernameDirty } from '../../redux/authorizationReducer';

interface MyProps {
    state: State,
    onChangeEmail: (text: string, isDirty: boolean) => void,
    onChangePassword: (text: string, isDirty: boolean) => void,
    onChangeUsername: (text: string, isDirty: boolean) => void,
    onChangeRegistrationForm: () => void,
    onChangeMessageServer: (text: string) => void,
    onChangeEmailDirty: () => void,
    onChangePasswordDirty: () => void,
    onChangeUsernameDirty: () => void,
    onChangeIsAuthorizedCreator:()=>void
}
const AuthorizationContainer: React.FC<MyProps> = (props) => {

    const changeEmail = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        props.onChangeEmail(target.value, true)
    }
    const changeUsername = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        props.onChangeUsername(target.value, true)
    }
    const changePassword = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        props.onChangePassword(target.value, true);
    }
    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        let temp: Answer | undefined;
        if (props.state.isEmailDirty && props.state.isPasswordDirty && !props.state.passwordError && !props.state.emailError) {
            if (props.state.isRegistrationForm) {
                if (props.state.username !== '') {
                    temp = await registrate({ email: props.state.email!, password: props.state.password!, username: props.state.username! });
                }
            }
            else {
                temp = await logIn({ email: props.state.email!, password: props.state.password! });
            }
            if (temp !== undefined && temp.ok === true) {
                props.onChangeIsAuthorizedCreator();
                sessionStorage.setItem('Token', temp.message!);
            } else if (temp !== undefined && temp.ok === false) {
                props.onChangeMessageServer(temp?.message!);
            }
        } else {
            props.onChangeEmailDirty();
            props.onChangePasswordDirty();
            props.onChangeUsernameDirty();
        }
    }

    const blurHandler = (e: React.SyntheticEvent) => {
        let target = e.target as HTMLInputElement;
        switch (target.name) {
            case 'email':
                props.onChangeEmailDirty();
                break;
            case 'password':
                props.onChangePasswordDirty();
                break;
            case 'username':
                props.onChangeUsernameDirty();
                break;
        }
    }
    return (<AuthorizationForm
        state={props.state}
        changeEmail={changeEmail}
        changePassword={changePassword}
        changeUsername={changeUsername}
        blurHandler={blurHandler}
        handleSubmit={handleSubmit}
    />);
}


const mapStateToProps = (state: AppStateType) => {
    return {
        state: state.authorizationState,
    }
}

export default connect(mapStateToProps, {
    onChangeEmail: UpdateEmailCreator,
    onChangePassword: UpdatePasswordCreator,
    onChangeUsername: UpdateUserNameCreator,
    onChangeRegistrationForm: UpdateIsRegistrationForm,
    onChangeMessageServer: UpdateMessageServer,
    onChangeEmailDirty: UpdateEmailDirty,
    onChangePasswordDirty: UpdatePasswordDirty,
    onChangeUsernameDirty: UpdateUsernameDirty,
    onChangeIsAuthorizedCreator:UpdateIsAuthorizedCreator
})(AuthorizationContainer);