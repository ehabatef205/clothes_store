
// import React, { useState, useEffect, useContext } from "react";
import ThirdSlider from "../components/section/ThirdSlider";

import Cart from './Cart' 
import React, {useState, useEffect, useContext } from "react";

import { Container } from "react-bootstrap";

import * as prod_cat from '../api/product_category'
import "../components/section/slider.css";
import Header from "../components/Navs/Header";
import { CartContext } from "../components/section/Shoppingcartcontext";

import Empitycart from "../components/section/empitycart";
const Bag = () => {

  const [totalPrice, setTotalPrice] = useState(0);


  const {  cartItems } = useContext(CartContext);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  useEffect(() => {
    if (Object.keys(cartItems).length !== 0 
    // || Object.values(cartItems).every((value) => value === 0)
    ) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  }, [cartItems]);

    const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCategory = async () => {
      await prod_cat.all_product_category().then(e => {
        setCategories(e.response)
      })
    }
    getCategory()
  },[])
  return (
    <div>
      <Header></Header>
      <Container className="my-4  " style={{ justifyContent: "center" }}>
          <div className="">
          {isCartEmpty ? (
        < Empitycart />
           
          ) : (
            <div className="" style={{ height: "fit-content" }}>
        <div className="d-flex justify-content-between">

               <button
            className="btn text-light "
            style={{ backgroundColor: "#7DCEA0" }}
          >
            AI Virtual Room
          </button>
          <button
            className="btn "
            style={{ color: "#7DCEA0", border: "1px solid gray" }}
          >
            Back
          </button>
        </div>

        <div className="d-flex m-3  d-flex flex-wrap  ">
          <div
            style={{ textAlign: "end" }}
            className="col-12 col-lg-4  d-flex-column justify-content-between  "
          >
            <div className="one">
              <p>Order Summary</p>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ border: "1px solid gray " }}
            >
              <div className="d-flex">
                <div className=" w-25 d-flex justify-content-center">
                  <i class="bi bi-percent m-2"></i>
                </div>

                <div style={{ width: "250px", textAlign: "start" }}>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    See Available Coupons
                  </p>
                  <p style={{ fontSize: ".8rem" }}>See Available Coupons</p>
                </div>
              </div>
              <div className=" w-25 d-flex">
                {" "}
                <i className="bi bi-chevron-compact-right m-3"></i>{" "}
              </div>
            </div>
            <div>
             
              <div className="d-flex justify-content-between">
                <div>SHIPPING</div>
                <div>50 $</div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <span className="mx-2" style={{ fontSize: "1.3rem" }}>
                      Total
                    </span>
                  </p>
                </div>
                <div>
                  <p className="mx-2" style={{ fontSize: "1.2rem" }}>
                    totat cost
                  </p>
                </div>
              </div>
              <div>
                <p style={{ fontSize: "1rem", padding: "0px", margin: "0px" }}>
                  Excluding import taxes (VAT) and customs' duties
                </p>
                <p style={{ fontSize: "1rem", padding: "0px", margin: "0px" }}>
                  You will be charged in USD
                </p>
                <p style={{ fontSize: "1rem", padding: "0px", margin: "0px" }}>
                  Zero Shipping fee for order sizes of 300 USD or more
                </p>
              </div>
            </div>
          </div>
          <div className="  col-12 col-lg-8">
           
             
              {categories?.map((category, index)=>(<Cart
               category_id = {category._id} category_name={category.name}

               
              />
           
              ))}
            
          </div>
          </div>
            <div className="d-flex justify-content-between">
          <button
            className="btn text-light "
            style={{ backgroundColor: "#7DCEA0" }}
          >
            Process to Chekout
          </button>
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
                       </section> </Container>
    </div>
  )
}

export default Bag


