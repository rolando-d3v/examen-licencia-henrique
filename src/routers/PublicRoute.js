import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({
    isAuthenticated,
  component: RouteComponent,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? <RouteComponent {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
