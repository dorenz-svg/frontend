import React, {FC} from 'react';
import {Card, Layout, Row} from "antd";
import { AuthForm } from '../components/Authorization/Form';

const Login: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <AuthForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;