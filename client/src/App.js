import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Component Imports
import Login from "./01_LoginPage";

function App() {
  const [count, setCount] = useState(0); //Test
  const [user, setUser] = useState(null); //Store User Login Info

  //TEST
  useEffect(() => {
    fetch("/hello") //-> 4000/api/hello
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  //Fetch User Info -> store in "user" state
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  //POST | to: "users#create"
  function userLogin(credentials) {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  //DELETE | "sessions#destroy"
  function handleLogout(event) {
    console.log("log out successful");
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(null));
  }

  //FUTURE | LoggedIn ? Home : Login
  // if (user) {
  //   console.log({ user });
  //   return <h2>Welcome, {user.username}!</h2>;
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <h1>Page Count: {count}</h1>
          </Route>
          <Route path="/login">
            <Login userLogin={userLogin} />
            <button onClick={handleLogout}>Logout</button>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
