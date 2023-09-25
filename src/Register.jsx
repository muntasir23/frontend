// import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://gersdfgrvsd.onrender.com/register", {
        name,
        email,
        password,
      })
      .then(() => navigate("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="mask">
      <div className="register">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-my">Sign Up</button>
        </form>
        <p>Already have an account !</p>
        <Link to="/login">
          <button className="btn-my">Loign</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
