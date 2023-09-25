// import React from 'react'

import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate, useParams } from "react-router-dom";
import { userContext } from "../App";

function Student() {
  const [poststu, setPoststu] = useState([]);
  const [limit, setLimit] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef(1);

  const user = useContext(userContext);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPaginatedUser();
    // getallUser();
    currentPage.current = 1;
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/getStudents")
  //     .then((poststu) => {
  //       setPoststu(poststu.data);
  //       console.log(poststu);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handledelete = (id) => {
    axios
      .delete("https://gersdfgrvsd.onrender.com/deletestudent/" + id)
      .then((result) => {
        window.location.reload();
        navigate("/student");
        console.log("pressed");
      })
      .catch((err) => console.log(err));
  };

  const getallUser = () => {
    fetch("https://gersdfgrvsd.onrender.com/getStudents", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(setUsers());
        setPoststu(data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete("https://gersdfgrvsd.onrender.com/deleteUser/" + id)
      .then((req) => {
        console.log(req);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handlePageClick = (e) => {
    console.log(e);
    currentPage.current = e.selected + 1;
    getPaginatedUser();
  };

  const getPaginatedUser = () => {
    fetch(
      `https://gersdfgrvsd.onrender.com/paginated?page=${currentPage.current}&limit=${limit}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setPageCount(data.pageCount);
        setPoststu(data.result);
      });
  };

  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let answer = await fetch(
        `https://gersdfgrvsd.onrender.com/search/${key}`
      );
      answer = await answer.json();
      if (answer) {
        setPoststu(answer);
      }
    } else {
      getPaginatedUser();
    }
  };

  return (
    <div className="student-info">
      <h1>Here Are The Students Info</h1>
      <div className="student-info-serch">
        <input type="text" placeholder="Search" onChange={searchHandle} />
      </div>
      <div>
        <table class="table">
          <thead>
            <tr className="Tr">
              <th scope="col">Sl</th>
              <th scope="col">Name</th>
              <th scope="col">Session</th>
              <th scope="col">Presents</th>

              {user.name ? (
                <>
                  <th scope="col">Edit-Button</th>
                  <th scope="col">Delete-Button</th>
                </>
              ) : (
                <></>
              )}
              {/* <th scope="col">Edit-Button</th>
              <th scope="col">Delete-Button</th> */}
            </tr>
          </thead>
          <tbody>
            {poststu.length > 0 ? (
              poststu.map((x, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{x.title}</td>
                    <td>{x.description}</td>
                    <td>{Math.floor((x.presents / x.days) * 100)} %</td>
                    {/* <td>
                    <Link to={`/editstudent/${x._id}`} className="student-edit">
                      Edit
                    </Link>
                  </td> */}
                    {user.name ? (
                      <>
                        <td>
                          <Link
                            to={`/editstudent/${x._id}`}
                            className="student-edit"
                          >
                            Edit
                          </Link>
                        </td>

                        <td>
                          <button
                            onClick={(e) => handledelete(x._id)}
                            className="student-delete"
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    ) : (
                      <></>
                    )}
                    {/* <td>
                    <button
                      onClick={(e) => handledelete(x._id)}
                      className="student-delete"
                    >
                      Delete
                    </button>
                  </td> */}
                  </tr>
                );
              })
            ) : (
              <>
                <div className="no-result-Info">
                  <h2>No Student is Found</h2>
                </div>
              </>
            )}
          </tbody>
        </table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
}

export default Student;
