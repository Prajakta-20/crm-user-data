import React, { useState } from "react";
import "./entry.css";
import { Login } from "../../components/login/Login";
import { PasswordReset } from "../../components/password-reset/PasswordReset";

export const EntryPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmload, setFrmLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }

    // console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill up all the form !");
    }

    //   TODO - call api to submit form
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("Please enter the Email!");
    }

    console.log(email);
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box">
        {frmload === "login" && (
          <Login
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}

        {frmload === "reset" && (
          <PasswordReset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </div>
    </div>
  );
};
