import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useState } from "react";
export default function Homeslider() {
  return (
    <div
      id="carouselExample"
      className="carousel slide "
      style={{ width: "1400px", height: "500px" }}
    >
      <div
        className="carousel-inner"
        style={{ height: "500px", backgroundColor: "blue" }}
      >
        <div className="carousel-item active">
          <img
            className="d-block w-100 "
            src="https://images.pexels.com/photos/317377/pexels-photo-317377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
            style={{ height: "500px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
            style={{ height: "500px" }}
          />
        </div>
        <div className="carousel-item">
          {" "}
          <img
            className="d-block w-100 "
            src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
            style={{ height: "500px" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
