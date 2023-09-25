// import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Notice() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://gersdfgrvsd.onrender.com/getposts")
      .then((posts) => {
        setPosts(posts.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const getPaginatedUser = () => {
    fetch("https://gersdfgrvsd.onrender.com/getposts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setPosts(data.data);
      });
  };

  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let answer = await fetch(
        ` https://gersdfgrvsd.onrender.com/searchnotice/${key}`
      );
      answer = await answer.json();
      if (answer) {
        setPosts(answer);
      }
    } else {
      setPosts(data);
    }
  };

  return (
    <div className="notice-er-aga-gora">
      <h1>All Notice</h1>
      <div className="student-info-serch ">
        <input type="text" placeholder="Search" onChange={searchHandle} />
      </div>

      <div className="postbody">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Link
              key={index}
              to={`/viewn/${post._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="poststyle">
                <h3>{post.title}</h3>
                <p>{post.descriptions}</p>
                <img
                  src={`https://gersdfgrvsd.onrender.com/Images/${post.file}`}
                  alt=""
                  height={"300px"}
                />
              </div>
            </Link>
          ))
        ) : (
          <>
            <h3>No Notice Found</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default Notice;
