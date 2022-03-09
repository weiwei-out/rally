import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "react-google-maps";

//Component Imports
import NavBar from "./00_NavBar";
import LoginPage from "./01_LoginPage";
import HomePage from "./02_HomePage";

//Google Maps API Key from .env
// const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  // console.log(apiKey);
  const [user, setUser] = useState(null); //Store User Login Info

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
        <NavBar />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage userLogin={userLogin} />
            <button onClick={handleLogout}>Logout</button>
          </Route>
        </Switch>
        {/* <WrappedMap googleMapURL={``} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
