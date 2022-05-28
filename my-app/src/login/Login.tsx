import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./login.css";

function Login() {
  const [errorMessages, setErrorMessages] = useState({ name: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid email address",
    pass: "invalid password",
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const name: string = "";
  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email Id</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <button className="button-container">Login</button>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="signup">
        <img src="logo.png" />
        <span>FineMentor</span>
      </div>
      <div className="login-form">
        <div className="title">Login</div>
        <div>Don't have any account yet?</div>
        <span className="reg-link">Register now</span>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
