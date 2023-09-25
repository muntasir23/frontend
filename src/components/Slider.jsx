// import React from 'react'

import si from "../assets/2.jpg";
import ti from "../assets/7.jpg";

function Slider() {
  return (
    <div className="rounded">
      <div className="slider">
        <div className="main-slider">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={si} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={si} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={ti} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
