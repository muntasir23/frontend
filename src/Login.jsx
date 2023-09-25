// import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import side from "./assets/login.svg";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://gersdfgrvsd.onrender.com/login", { email, password })
      .then((res) => {
        if (res.data === "Succes") {
          navigate("/dashboard");
          window.alert("You are Login");
        } else {
          window.alert("Login Fail");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex-login">
      <div className="info">
        <h1>Log in</h1>
        <div className="img-box">
          <img src={side} height={"400px"} />
        </div>
      </div>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <div className="textInput">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <i className="bi bi-envelope-at-fill"></i>
          </div>
          <div className="textInput">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <i className="bi bi-file-lock-fill"></i>
          </div>
          <button className="loginSubmit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
