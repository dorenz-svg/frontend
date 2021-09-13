import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux";
import { AuthActionCreators } from "../../redux/reducers/Auth/authorizationReducer";
import { rules } from "../../utils/rules";
export const AuthForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const isLoading =useSelector((state:AppStateType)=>state.auth.isLoading);
    const dispatch = useDispatch();
    const isRegistation = useSelector((state: AppStateType) => state.auth.isRegistration)
    const error = useSelector((state: AppStateType) => state.auth.error)
    const submit = () => {
        if (isRegistation)
            dispatch(AuthActionCreators.registration(email,password,username))
        else
            dispatch(AuthActionCreators.logIn(password,email))
    }
    return (
        <Form onFinish={submit}>
            {error && <div style={{ color: 'red' }}>
                {error}
            </div>}
            {isRegistation && <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required()]}
            >
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </Form.Item>}
            <Form.Item
                label="Email"
                name="email"
                rules={[rules.required("Пожалуйста введите email"), { type: 'email', message: 'некорректный email' }]}
            >
                <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required("Пожалуйста введите пароль"), rules.validPassword()]}
            >
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={"password"}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>

    );
}