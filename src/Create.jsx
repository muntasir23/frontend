// import React from 'react'
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./App";
import postani from "./assets/post.svg";
import "./style.css";

function Create() {
  const user = useContext(userContext);
  const [title, setTitle] = useState();
  const [descriptions, setDescriptions] = useState();
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("descriptions", descriptions);
    formData.append("email", user.email);
    formData.append("file", file);
    axios
      .post("https://gersdfgrvsd.onrender.com/create", formData)
      .then((res) => {
        if (res.data === "Succes") {
          window.location.href = "/notice";
        }
        navigate("/notice");
        window.alert("Your Post Added Successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex-notice">
      <div className="noticeHeadaer">
        <h1>
          Create a new <br />
          <span>notice</span>
        </h1>
        <img src={postani} height={"350px"} />
      </div>

      <div className="register">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Session"
            className="noticeinputs"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <textarea
            name="descriptions"
            id=""
            cols="30"
            rows="20"
            placeholder="Enter Descriptions"
            className="noticeTextarea"
            onChange={(e) => {
              setDescriptions(e.target.value);
            }}
          ></textarea>
          <br />
          <br />
          <input
            type="file"
            name=""
            id=""
            className="noticeinputs"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <br />
          <br />
          <button className="loginSubmit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
