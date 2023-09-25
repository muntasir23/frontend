import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "./App";
import logo from "./assets/greeLogo.png";
import "./style.css";

function Navbar() {
  const user = useContext(userContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("https://gersdfgrvsd.onrender.com/logout")
      .then((res) => {
        if (res.data === "Success") {
          navigate("/");
          window.alert("Are You Sure?");
        }
        navigate(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/" className="home">
          <img src={logo} height={"50px"} />
          <h4>Math_Family</h4>
        </Link>
      </div>

      <div className="links">
        <div className="linkTag">
          <Link to="/">
            <i className="bi bi-house"></i>Home
          </Link>
          <Link to="/notice">
            <i className="bi bi-app-indicator"></i>Notice
          </Link>
          <Link to="/teacher">
            <i className="bi bi-people"></i>Faculty
          </Link>
          <Link to="/seminar">
            <i className="bi bi-book"></i> Seminar
          </Link>
          <Link to="/student">
            <i className="bi bi-book"></i> Student
          </Link>
        </div>
        {user.name ? (
          <div>
            <Link to="/dashboard" className="onAdmin">
              Admin
            </Link>
            <input
              type="button"
              value="logout"
              onClick={handleLogout}
              style={{ width: "100px", marginLeft: "10px" }}
              className="onNav"
            />
          </div>
        ) : (
          <Link to="/login">
            <button className="onNav">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
