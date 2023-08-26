
import ThirdSlider from "../components/section/ThirdSlider";

import Wishlistcol from "../components/section/wishlistcol";
import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import * as cart from "../api/wish";
import "../components/section/slider.css";
import Header from "../components/Navs/Header";

import Empitywish from "../components/section/empitywish";


function Wishlist({update_p, personal}) {

  const navigate = useNavigate();


  const [cartItems, setCartItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const load = () => {
    cart.get_cart().then(e => { setCartItems(e) })
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

  return (
    <div>
      <Header update_p={update_p} personal={personal}></Header>
      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div className="" style={{ minHeight: "500px" }}>
          {!isCartEmpty ? (
            <Empitywish />
          ) : (
            <div className="" style={{ height: "fit-content" }}>
              <div className="d-flex justify-content-between">

                <button
                  onClick={() => { navigate(-1) }}
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
                            update_p={update_p} personal={personal}
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
      </Container>
    </div>
  );
};

export default Wishlist;
