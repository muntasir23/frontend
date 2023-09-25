import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postani from "../assets/post.svg";
function EditStudent() {
  const [title, setTitle] = useState();
  const [description, setDEscription] = useState();
  const [presents, setPresents] = useState();
  const [days, setDays] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://gersdfgrvsd.onrender.com/editstudent/" + id, {
        title,
        description,
        presents,
        days,
      })
      .then((res) => {
        if (res.data === "Succes") {
          // navigate(0);
        }
        console.log("Post Submit");
        navigate("/student");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://gersdfgrvsd.onrender.com/getstudentbyid/" + id)
      .then((result) => {
        console.log(result.data);
        setTitle(result.data.title);
        setDEscription(result.data.description);
        setPresents(result.data.presents);
        setDays(result.data.days);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <div className="flex-notice">
        <div className="noticeHeadaer">
          <h1>
            Update a new <br />
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
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter Session"
              className="noticeinputs"
              value={description}
              onChange={(e) => {
                setDEscription(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter Presents"
              className="noticeinputs"
              value={presents}
              onChange={(e) => {
                setPresents(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter Days"
              className="noticeinputs"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
              }}
            />
            <br />
            <br />
            <button className="loginSubmit">update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;
