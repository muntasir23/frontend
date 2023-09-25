// import React from "react";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { userContext } from "./App";

function Viewnotice() {
  const user = useContext(userContext);
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://gersdfgrvsd.onrender.com/getpostbyid/" + id)
      .then((result) => setPost(result.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handledelete = (id) => {
    axios
      .delete("https://gersdfgrvsd.onrender.com/deletepost/" + id)
      .then(() => {
        navigate("/notice");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="viewNotice-main">
      <div className="viewImage">
        <img
          src={`https://gersdfgrvsd.onrender.com/Images/${post.file}`}
          alt=""
          height={"500px"}
        />
        <h2>{post.title}</h2>
        <p>{post.descriptions}</p>
        <div>
          {user.name ? (
            <>
              <Link to={`/editpost/${post._id}`} className="viewNoticeBtn">
                Edit
              </Link>
              <br />
              <button
                className="viewNoticeBtn dltbtn"
                onClick={() => handledelete(post._id)}
              >
                delete
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Viewnotice;
