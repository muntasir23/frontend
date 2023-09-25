// import React from 'react'
import di1 from "../assets/despoImage (1).jpg";
import di2 from "../assets/despoImage (2).jpg";
import di3 from "../assets/despoImage(3).jpg";

function DespoImage() {
  return (
    <div>
      <div className="despo-flex">
        <div className="card1">
          <img src={di1} alt="" height={"100%"} width={"100%"} />
        </div>
        <div className="card2">
          <div className="card-little">
            <img src={di2} alt="" height={"100%"} width={"100%"} />
          </div>
          <div className="card-little">
            <img src={di3} alt="" height={"100%"} width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DespoImage;
