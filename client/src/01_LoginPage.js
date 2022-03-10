import React, { useState } from "react";

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
      <form>
        {/* Username */}
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleLogin}
          ></input>
        </div>
        {/* Password */}
        <div>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={handleLogin}
          ></input>
        </div>
        {/* Email */}
        <div>
          <button onClick={(e) => postLogin(e)}>sign in</button>
          <button onClick={(e) => setLoginToggle(!loginToggle)}>
            Make New Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
