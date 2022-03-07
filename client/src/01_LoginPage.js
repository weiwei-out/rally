import React, { useState } from "react";

// 01. LoginPage
function Login({ userLogin }) {
  // a. Create a state to store login credentials
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
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
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleLogin}
          ></input>
        </div>
        {/* Sign in  */}
        <div>
          <button onClick={(e) => postLogin(e)}>sign in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
