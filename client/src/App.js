import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useNavigate } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "react-google-maps";

//Component Imports
import NavBar from "./00_NavBar";
import LoginPage from "./01_LoginPage";
import SignUpPage from "./01_SignUpPage";
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
  function userSignUp(credentials) {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          setUser(data);
        });
      }
    });
  }

  const [loginToggle, setLoginToggle] = useState(false);
  //post '/login', to: 'sessions#create'
  function userLogin(credentials) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          setUser(data);
        });
      }
    });
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

  if (!user && !loginToggle) {
    return (
      <LoginPage
        userLogin={userLogin}
        setLoginToggle={setLoginToggle}
        loginToggle={loginToggle}
      />
    );
  } else if (!user) {
    return (
      <SignUpPage
        userSignUp={userSignUp}
        setLoginToggle={setLoginToggle}
        loginToggle={loginToggle}
      />
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar handleLogout={handleLogout} />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <HomePage user={user} />
          </Route>
        </Switch>
        {/* <WrappedMap googleMapURL={``} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
