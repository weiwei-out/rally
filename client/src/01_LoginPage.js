import React, { useState } from "react";
import logo from "./rally.svg";
import "./01_LoginPage.css";

//NOTE: THIS IS A SIGNUP -> FUTURE CHANGE NAMING FROM LOGIN-> SIGNUP
// 01. LoginPage
function LoginPage({ userLogin, setLoginToggle, loginToggle }) {
  // a. Create a state to store login credentials
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // b. Update "credentials" state to store any changes inputted by user
  const handleLogin = (event) => {
    const field = event.target.name;
    const inputValue = event.target.value;
    setCredentials({ ...credentials, [field]: inputValue });
  };

  // c. onClick -> userLogin -> POST to user
  const postLogin = (event) => {
    event.preventDefault();
    userLogin(credentials);
  };

  return (
    <div>
      <img alt="logo" src={logo} width="10%" />
      <form>
        {/* Username */}
        <div>
          <input
            className="bar"
            type="text"
            name="username"
            placeholder="username"
            onChange={handleLogin}
          ></input>
        </div>
        {/* Password */}
        <div>
          <input
            className="bar"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleLogin}
          ></input>
        </div>
        <div>
          <button id="signIn" onClick={(e) => postLogin(e)}>
            sign in
          </button>
          <button id="join" onClick={(e) => setLoginToggle(!loginToggle)}>
            register
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
