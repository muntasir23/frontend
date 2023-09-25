// import React from 'react'
import { Link } from "react-router-dom";

import "./style.css";
function Sidebar() {
  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Open Side Bar
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="sidebarlinks">
            <ul>
              <li>
                <Link to="/creatStudent">
                  <i className="bi bi-person-add"></i>Student Info
                </Link>
              </li>
              <li>
                <Link to="/create">
                  <i className="bi bi-receipt"></i>Create Notice
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="bi bi-calendar3-event-fill"></i>Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
