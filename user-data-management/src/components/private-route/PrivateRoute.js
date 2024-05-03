import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { Login } from "../login/Login";
// import { EntryPage } from "../../page/entry/EntryPage";
// import { Route, redirect as Redirect } from "react-router-dom";
import { DefaultLayout } from "../../layout/partials/DefaultLayout";

export const PrivateRoute = ({ children, ...rest }) => {
  let isAuth = true;

  if (isAuth) {
    return (
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    );
  } else {
    return <Navigate to={"/"} />;
  }
};
