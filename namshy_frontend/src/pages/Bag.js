// import React, { useState, useEffect, useContext } from "react";
import ThirdSlider from "../components/section/ThirdSlider";
import { update } from "../api/personal_cookies";
import PopUp from "../components/section/room/PopUp";
import Cartcol from "../components/section/Cartcol";
import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import * as cart from "../api/cart";
import { carts } from "../api/product";
import "../components/section/slider.css";
import Header from "../components/Navs/Header";

import Empitycart from "../components/section/empitycart";
const Bag = ({ update_p, personal }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [ProductItems, setProductItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [VRactive, setVRactive] = useState(false);
  const navigate = useNavigate();

  const chekoutpage = () => {

    navigate('/checkout', { state: cartItems });
  };
  const load = async () => {
    const productArr = []
    const cartArr = await cart.get_cart()
    cartArr?.forEach(element => {
      productArr.push(element.product_id)
    });

    const products = await carts(productArr)
    setCartItems(cartArr)
    setProductItems(products)
    var total = 0
    products?.forEach((element, index) => {
      total += element.price_after * cartArr[index].quantity
    })
    setTotalPrice(total)
    update_p()
  }

  useEffect(() => {
    load()

  }, []);

  useEffect(() => {

    if (
      !cartItems?.length
      // || Object.values(cartItems).every((value) => value === 0)
    ) {

      setIsCartEmpty(false);
    } else {

      setIsCartEmpty(true);
    }
  }, [cartItems]);
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    for (const product of ProductItems) {
      if (product.garment_id !== undefined) {
        setIsButtonDisabled(true);
        
       
        break;
     
      }
    }
  }, [ProductItems]);


  return (
    <div>
      <Header update_p={update_p} personal={personal}></Header>
      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div className="">
          {!isCartEmpty ? (
            <Empitycart />
          ) : (
            <div className="" style={{ height: "fit-content" }}>
              <div className="d-flex justify-content-between">

              <div className="button-container">
        
                <button
                    disabled={!isButtonDisabled}
                    
                  onClick={() => { setVRactive(!VRactive) }}
                  className="btn text-light hover-button "
                  style={{ backgroundColor: "#d99d2b" }}
                >
                  AI Virtual Room
                </button>
                <div className={` ${!isButtonDisabled ? 'message' : 'hidden'}`}> Add an AI product</div></div>
             
  
                
  
                {VRactive && <PopUp products={ProductItems} VRactive={VRactive} setVRactive={setVRactive}></PopUp>}
                <ToastContainer />
                <button
                  onClick={() => { navigate(-1) }}
                  className="btn "
                  style={{ color: "#d99d2b", border: "1px solid gray" }}
                >
                  Back
                </button>
              </div>

              <div className="d-flex m-3  d-flex flex-wrap  ">
                <div
                  style={{ textAlign: "end", height: "80%" }}
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
                        <p style={{ fontSize: ".8rem" }}>
                          See Available Coupons
                        </p>
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
                          {totalPrice + 50}$
                        </p>
                      </div>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "1rem",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Excluding import taxes (VAT) and customs' duties
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        You will be charged in USD
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Zero Shipping fee for order sizes of 300 USD or more
                      </p>
                    </div>
                  </div>
                </div>
                <div className="  col-12 col-lg-8">
                  <div>
                    <div className="d-flex justify-content-around flex-wrap">
                      {cartItems?.map((cart2, index) => (
                        <div key={index}>
                          <Cartcol
                            cart={cart2}
                            personal={personal}
                            product={ProductItems[index]}
                            load={load}
                            update_p={update_p}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total Price: {(totalPrice + 50).toFixed(2)} $</p>
                <button
                  className="btn text-light "
                  style={{ backgroundColor: "#d99d2b" }}
                  onClick={chekoutpage}
                >
                  Proceed to Chekout
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Bag;