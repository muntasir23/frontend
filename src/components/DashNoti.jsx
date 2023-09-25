import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function NoticesIntro() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://gersdfgrvsd.onrender.com/getpostatnotice")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="noticeHome-Dash">
      <div className="holdernoticehome">
        <div className="home-postbody">
          {posts.map((post, index) => (
            <Link
              key={index}
              to={`/viewn/${post._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="home-poststyle">
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.descriptions.slice(0, 50)}</p>
                </div>
                <div>
                  <img
                    src={`https://gersdfgrvsd.onrender.com/Images/${post.file}`}
                    alt=""
                    height={"100px"}
                    width={"100px"}
                  />
                </div>
              </div>
            </Link>
          ))}
          <Link to="/notice">
            <button className="postBtn">
              View All{" "}
              <i
                className="bi bi-arrow-right-circle-fill"
                style={{ marginLeft: "10px" }}
              ></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoticesIntro;
