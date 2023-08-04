import ThirdSlider from "../components/section/ThirdSlider";
import { Container } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import Cartcol from "../components/section/Cartcol";

import* as product from "../api/product" 
const CartItems = ({product}) => {
    useEffect(()=>{
        
    })
  return (
    
    <div>  
        
    
    <Container style={{ position: "relative", top: "70px" }}>
      <div>
        <div className="d-flex justify-content-between">
          
            
          <div
              className="tow col-8 my-3  bg-info mx-5"
              style={{ width: "770px", marginRight: "0px" }}
            >
              <Cartcol  product={product} />
            </div> 
          </div>
        </div>



    </Container>
    </div>
  );
}

export default CartItems




 



