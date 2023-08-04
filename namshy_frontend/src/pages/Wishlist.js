// import React, { useState, useEffect, useContext } from "react";
import ThirdSlider from "../components/section/ThirdSlider";

import Wishlistcol from "../components/section/wishlistcol";
import React, { useState, useEffect, useContext } from "react";

import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import * as cart from "../api/wish";
import "../components/section/slider.css";
import Header from "../components/Navs/Header";

import Empitywish from "../components/section/empitywish";


const Wishlist = () => {
  
  const navigate = useNavigate();
 

  const [cartItems,setCartItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const load=()=>{
    cart.get_cart().then(e=>{setCartItems(e)})
 }
  useEffect(() => {
    load()
    
  }, []);
  useEffect(() => {

    if (
      !cartItems.length
      // || Object.values(cartItems).every((value) => value === 0)
    ) {

      setIsCartEmpty(false);
    } else {

      setIsCartEmpty(true);
    }
  }, [cartItems]);
  
  return (
    <div>
      <Header></Header>
      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div className="">
          {!isCartEmpty ? (
            <Empitywish />
          ) : (
            <div className="" style={{ height: "fit-content" }}>
              <div className="d-flex justify-content-between">
                
                <button
                  className="btn "
                  style={{ color: "#d99d2b", border: "1px solid gray" }}
                >
                  Back
                </button>
              </div>

              <div className="d-flex m-3  d-flex flex-wrap  ">
                
                <div className="  col-12 ">
                  <div >
                    <div className="d-flex justify-content-around flex-wrap ">
                      {cartItems?.map((product, index) => (
                        <div className="col-12 col-lg-4 " >
                          <Wishlistcol 
                          key={index}
                           product={product} 
                          renderedIndex={index} 
                          load={load}
                           />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          )}
        </div>
        <section className=" my-5 h-25 " style={{ width: "1300px" }}>
          <div className=" w-100 my-3  " style={{ textAlign: "left" }}>
            <h2>Similar Product </h2>
          </div>
          <div>
            <ThirdSlider id="second"></ThirdSlider>
          </div>
        </section>{" "}
      </Container>
    </div>
  );
};

export default Wishlist;
