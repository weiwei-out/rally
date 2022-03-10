import React, { useState } from "react";
import logo from "./rally.svg";
import "./01_SignUpPage.css";

//NOTE: THIS IS A SIGNUP -> FUTURE CHANGE NAMING FROM LOGIN-> SIGNUP
// 01. LoginPage
function SignUpPage({ userSignUp, setLoginToggle, loginToggle }) {
  // a. Create a state to store login credentials
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
  });

  // b. Update "credentials" state to store any changes inputted by user
  const handleLogin = (event) => {
    const field = event.target.name;
    const inputValue = event.target.value;
    setCredentials({ ...credentials, [field]: inputValue });
  };

  // c. onClick -> userSignUp -> POST to user
  const postLogin = (event) => {
    event.preventDefault();
    userSignUp(credentials);
  };

  return (
    <div>
      <img alt="logo" src={logo} width="10%" />
      <form>
        {/* Username */}
        <div>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="username"
            onChange={handleLogin}
          ></input>
        </div>
        {/* Password */}
        <div>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleLogin}
          ></input>
        </div>
        {/* Password Confirmation*/}
        <div>
          <input
            className="input"
            type="password"
            name="password_confirmation"
            placeholder="confirm password"
            onChange={handleLogin}
          ></input>
        </div>
        {/* Email */}
        <div>
          <input
            className="input"
            type="text"
            name="email"
            placeholder="email"
            onChange={handleLogin}
          ></input>
        </div>
        {/* Sign in  */}
        <div>
          <button className="button" onClick={(e) => postLogin(e)}>
            sign up
          </button>
          <button
            className="button"
            onClick={(e) => setLoginToggle(!loginToggle)}
          >
            back
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
