import { Layout } from "antd";
import React from "react";
import AppRouter from './AppRouter';
import Header from "./components/Header/Header";

export const App: React.FC = () => {
    return (
        <Layout>
        <Layout.Header><Header/></Layout.Header>
        <AppRouter />
        </Layout>);
};