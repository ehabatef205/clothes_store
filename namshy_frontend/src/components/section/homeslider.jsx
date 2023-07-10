import React from "react";
import Carousel from "react-bootstrap/Carousel";
export default function Homeslider() {
  const src = [
    "https://images.pexels.com/photos/317377/pexels-photo-317377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  return (
    <div
      id="carouselExample"
      className="carousel slide "
      style={{ height: "500px" , justifyContent:"center" ,borderRadius:"50px",margin:'auto'}}
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
