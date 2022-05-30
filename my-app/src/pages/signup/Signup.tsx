import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const [values, setValues] = useState({
    fullName: "",
    doj: "",
    designation: "",
    email: "",
    password: "",
  });

  const validateForm = (errors: any) => {
    let valid = true;
    Object.values(errors).forEach(
      (val: any) => val.length > 0 && (valid = false)
    );
    return valid;
  };
  const [error, setError] = useState({
    fullName: false,
    email: false,
    password: false,
  });

  const validateName = (value: any) => {
    let regex = /^[a-zA-Z ]{3,20}$/;
    return regex.test(value);
  };

  const validateEmail = (value: any) => {
    let regex = /^([a-zA-Z0-9_\.\-])+\@divami.com$/;
    return regex.test(value);
  };

  const validPassword = (data: any) => {
    let regx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regx.test(data);
  };

  const handleFormChange = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setValues({ ...values, [fieldName]: fieldValue });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (values.fullName.length > 0 && validateName(values.fullName)) {
      if (values.email.length > 0 && validateEmail(values.email)) {
        if (values.password.length > 0 && validPassword(values.password)) {
          console.log(values);
        } else {
          setError({ ...error, password: true });
        }
      } else {
        setError({ ...error, email: true });
      }
    } else {
      setError({ ...error, fullName: true });
    }
  };

  return (
    <div className="signup">
      <div className="signup__logo">
        <img src="logo.png" />
        <h1>Fine Mentor</h1>
      </div>

      <hr className="signup__hr" />

      <div className="signup__form">
        <h2 className="signup__title">Sign Up</h2>
        <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
          <div className="formField">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" />
            {error.fullName && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Full Name should contain 3 to 20 characters only
              </p>
            )}
          </div>
          <div className="formField">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" />
            {error.email && (
              <p style={{ color: "red", fontSize: "12px" }}>Invalid Email</p>
            )}
          </div>
          <div className="formField">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            {error.password && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Password should contain 8 letters which includes 1 uppercase, 1
                digit and 1 special character
              </p>
            )}
          </div>
          <div className="formField">
            <label htmlFor="designation">Employee Designation</label>
            <input type="text" name="designation" />
          </div>
          <div className="formField">
            <label htmlFor="date">Date of Joining</label>
            <input type="date" name="doj" />
          </div>

          <div>
            <button className="signup-btn" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
