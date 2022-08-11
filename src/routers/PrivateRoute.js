import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, component: RouteComponent, ...rest }) => {


  //path de la pagina que navegas para logear y regresar a la misma pagina
  localStorage.setItem('lastpath',rest.location.pathname )

  return (
    <Route
      {...rest}
      component={(props) => {
        return  isAuthenticated 
        ? <RouteComponent {...props} /> 
        : <Redirect to="/intro" />;
      }}
    />
  );
};

export default PrivateRoute;

