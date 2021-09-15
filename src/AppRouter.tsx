import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { AppStateType } from './redux';
import { privateRoutes, publicRoutes, RouteNames } from './router';
import { Layout } from "antd";
import Navbar from "./components/Navbar/Navbar";
function AppRouter() {
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    return (isAuth?<Layout >
      <Layout.Sider theme="light"><Navbar/></Layout.Sider>
      <Layout.Content>
        <Switch>
          {privateRoutes.map(route =>
            <Route path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          )}
          <Redirect to={RouteNames.PROFILE} />
        </Switch>
      </Layout.Content>
    </Layout>:
    <Layout >
      <Layout.Content>
        <Switch>
          {publicRoutes.map(route =>
            <Route path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          )}
          <Redirect to={RouteNames.AUTH} />
        </Switch>
      </Layout.Content>
    </Layout>);
}
export default AppRouter;