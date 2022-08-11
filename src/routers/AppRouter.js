import React, { useContext } from "react";
import { Switch } from "react-router-dom";
import LayoutLogin from "../components/login/layout-login/LayoutLogin";
import AuthContext from "../context/auth/authContext";

import Intro from "../pages/intro/Intro";
import HomeRouter from "./HomeRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {

  const {user} = useContext(AuthContext)

  return (
        <Switch>
          <PublicRoute exact path="/intro"  component={Intro}  isAuthenticated={user.logged} />
          <PublicRoute exact path="/login2"  component={LayoutLogin}  isAuthenticated={user.logged} />
          <PrivateRoute path="/" component={HomeRouter} isAuthenticated={user.logged} />
        </Switch>
  );
}
