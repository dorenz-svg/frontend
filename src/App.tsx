import React from "react";
import { Layout } from 'antd';
import Header from './components/Header/Header';
import AppRouter from './AppRouter';
import './App.css';
export const App: React.FC = () => {
    return (
        <Layout>
            <Header />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
};