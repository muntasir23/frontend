// import React from 'react'
import { Link } from "react-router-dom";
import DashNoti from "./components/DashNoti";
import DashStu from "./components/DashStu";
function Dashboard() {
  return (
    <div className="Dashboard-main">
      {/* <Sidebar /> */}
      <h1>Admin Panel</h1>
      <div>
        <div className="Link-dash-flex">
          <Link to="/create" className="Dashboard-links">
            <i className="bi bi-pin-angle-fill"></i>
            Add <br /> Notice +
          </Link>
          <Link to="/creatStudent" className="Dashboard-links">
            <i className="bi bi-person-badge-fill"></i>
            Add <br />
            Student +
          </Link>
        </div>
      </div>

      <div className="Dashnotices">
        <DashNoti />
        <DashStu />
      </div>
    </div>
  );
}

export default Dashboard;
