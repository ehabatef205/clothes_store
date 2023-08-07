import React from "react";
import './homecard.css'
import banner from "./banners/banner.jpg"
import banner2 from "./banners/banner2.jpg"
import banner3 from "./banners/banner3.jpg"


import Carousel from "react-bootstrap/Carousel";
export default function Homeslider() {
  const src = [
    banner,banner2,banner3
  ]
  return (
    <div
      id="carouselExample"
      className="carousel slide banners "
      style={{ height: "500px" , maxWidth: "100%", justifyContent:"center" ,borderRadius:"50px",margin:'auto'}}
    >
      <div
        className="carousel-inner"
        style={{ height: "450px",borderRadius:"50px" , width:'100%' , margin:'auto',}}
      >
        <Carousel interval={3000} controls={false} style={{  justifyContent:'center'}}>
            {src.map((image, index) => (
                <Carousel.Item key={index}>
                <img
                    src={image}
                    alt={""}
                />
                </Carousel.Item>
            ))}
            </Carousel>
      </div>
      {/* <button
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
      </button> */}
    </div>
  );
}
