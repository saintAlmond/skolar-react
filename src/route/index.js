import {Switch, Router, Redirect, Route, BrowserRouter} from "react-router-dom";
import React from "react";
import {useAuth} from "../contexts/auth/authContext";
import {LoginLayout} from "./login/Login";
import {AppRoutes} from "./app";
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const RedirectIfLoggedRoute = ({ children, ...rest }) => {
  const {isLogged} = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/app",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  const {isLogged} = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


export const Routes = () => {
  return (<BrowserRouter>

    <Switch>

      <RedirectIfLoggedRoute path="/login">
        <LoginLayout />
      </RedirectIfLoggedRoute>
      <PrivateRoute path="/app">
        <AppRoutes />
      </PrivateRoute>
    </Switch>

  </BrowserRouter>)
}
