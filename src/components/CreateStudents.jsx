import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateStudents() {
  const [title, setTitle] = useState();
  const [description, setDEscription] = useState();
  const [presents, setPresents] = useState();
  const [days, setDays] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://gersdfgrvsd.onrender.com/createStudent", {
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
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex-notice">
        <div className="register">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              className="noticeinputs"
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
              onChange={(e) => {
                setDEscription(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="Enter Presents"
              className="noticeinputs"
              onChange={(e) => {
                setPresents(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="Enter Days"
              className="noticeinputs"
              onChange={(e) => {
                setDays(e.target.value);
              }}
            />
            <button className="loginSubmit">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateStudents;
