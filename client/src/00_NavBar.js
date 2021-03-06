import "./00_NavBar.css";
import logo from "./rally.svg";

function NavBar({ handleLogout }) {
  return (
    <div id="NavBar">
      <div className="SubNavBab">
        <div id="Logo">
          <img alt="logo" src={logo} width="10%" />
        </div>
      </div>
      <div className="SubNavBab" id="right">
        <button id="logout" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
