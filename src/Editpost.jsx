// import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postani from "./assets/post.svg";
import "./style.css";
function Editpost() {
  const [title, setTitle] = useState();
  const [descriptions, setDescriptions] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://gersdfgrvsd.onrender.com/editpost/" + id, {
        title,
        descriptions,
      })
      .then((res) => {
        if (res.data === "Succes") {
          window.location.href = "/notice";
          navigate("/notice");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://gersdfgrvsd.onrender.com/getpostbyid/" + id)
      .then((result) => {
        setTitle(result.data.title);
        setDescriptions(result.data.descriptions);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="flex-notice">
      <div className="noticeHeadaer">
        <h1>
          Update your
          <br />
          <span>notice</span>
        </h1>
        <img src={postani} height={"350px"} />
      </div>

      <div className="register">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
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
            rows="30"
            value={descriptions}
            placeholder="Enter Descriptions"
            className="noticeTextarea"
            onChange={(e) => {
              setDescriptions(e.target.value);
            }}
          ></textarea>
          <br />
          <br />
          <button className="loginSubmit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Editpost;
