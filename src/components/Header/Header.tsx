import { Layout, Menu, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppStateType } from '../../redux';
import { AuthActionCreators } from '../../redux/reducers/Auth/authorizationReducer';
import { RouteNames } from '../../router';
const Header: React.FC = () => {
    const isAuth= useSelector((state:AppStateType)=>state.auth.isAuth);
    const isRegistrationForm= useSelector((state:AppStateType)=>state.auth.isRegistration)
    const router = useHistory();
    const dispatch= useDispatch();
    const logout=()=>{
        sessionStorage.removeItem('Token');
        dispatch(AuthActionCreators.setIsAuth(false));
        router.push(RouteNames.AUTH)
    }
    return (
        <Layout.Header>
            <Row justify="end">
            {isAuth
                    ?
                    <>
                        <Menu theme="dark" mode="horizontal" selectable={false} >

                            <Menu.Item
                                onClick={logout}
                                key={1}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    : isRegistrationForm?
                    <Menu theme="dark" mode="horizontal" selectable={false} >
                        <Menu.Item
                            onClick={() => dispatch(AuthActionCreators.setRegistration(!isRegistrationForm))}
                            key={1}
                        >
                            Registration
                        </Menu.Item>
                    </Menu>
                    :<Menu theme="dark" mode="horizontal" selectable={false} >
                    <Menu.Item
                        onClick={() =>{debugger; dispatch(AuthActionCreators.setRegistration(!isRegistrationForm))}}
                        key={1}
                    >
                        LogIn
                    </Menu.Item>
                </Menu>
                }
            </Row>
        </Layout.Header>
    );

}
export default Header;