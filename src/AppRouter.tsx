import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import {AppStateType} from './redux';
import { privateRoutes, publicRoutes, RouteNames } from './router';
function AppRouter() {
  const isAuth= useSelector((state:AppStateType)=>state.auth.isAuth)
  return (
    isAuth ?
        <Switch>
            {privateRoutes.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.path}
                />
            )}
            <Redirect to={RouteNames.PROFILE}/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.path}
                />
            )}
            <Redirect to={RouteNames.AUTH}/>
        </Switch>
);
}
export default AppRouter;