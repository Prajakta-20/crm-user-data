import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { Login } from "../login/Login";
// import { EntryPage } from "../../page/entry/EntryPage";
// import { Route, redirect as Redirect } from "react-router-dom";
// import { DefaultLayout } from "../../layout/DefaultLayout";
import { DefaultLayoutUser } from "../../layout/partials/DefaultLayoutUser";

export const PrivateRouteUser = ({ children, ...rest }) => {
  let isAuth = true;

  if (isAuth) {
    return (
      <DefaultLayoutUser>
        <Outlet />
      </DefaultLayoutUser>
    );
  } else {
    return <Navigate to={"/"} />;
  }
};
