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
    
        <Carousel 
        interval={3000} 
        controls={false}
        className="home-Carousel"
        
       >
            {src.map((image, index) => (
                <Carousel.Item key={index} 
                className="home-Carousel-item"
                >
                  
                <img
                    src={image}
                    alt={""}
                    className=" home-Carousel-img"
                />
                </Carousel.Item>
            ))}
       
            </Carousel>
      
  );
}
 