// import React from 'react'

import Slider from "./Slider";

function Firstpage() {
  return (
    <>
      <div className="flex-firstpage">
        <div className="Firstpage">
          <h1>
            <span style={{ color: "#5d7076" }}>Welcome to</span> <br />
            Department <br /> <span>of</span>
            <span className="math">Mathematics</span>
          </h1>
          <h3>Chittagong College</h3>
          <h5>Lorem ipsum dolor sit amet.</h5>
        </div>

        <div>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Firstpage;
