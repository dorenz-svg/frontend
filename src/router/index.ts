import React from "react";
import Profile from "../components/Profile/Profile";
import Auth from "../pages/Auth";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    AUTH = '/auth',
    PROFILE = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.AUTH, exact: true, component:Profile }
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.PROFILE, exact: true, component:Auth }
]
