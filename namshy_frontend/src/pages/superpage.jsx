// import React, { useState, useEffect, useContext } from "react";
import ThirdSlider from "../components/section/ThirdSlider";

import Supercol from "../components/section/supercol";
import React, { useState, useEffect, useContext } from "react";

import { Container } from "react-bootstrap";
import { useNavigate , useLocation } from 'react-router-dom';

import "../components/section/slider.css";
import Header from "../components/Navs/Header";



const SuperPage = () => {

  const navigate = useNavigate();

  const location=useLocation()
  const [cartItems, setCartItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const load = () => {
    console.log(location.state)
    setCartItems(location.state)
  }
  useEffect(() => {
    load()
  }, []);

  return (
    <div>
      <Header></Header>
      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div className="">
          (
            <div className="" style={{ height: "fit-content" }}>
              <div className="d-flex justify-content-between">

                <button
                 onClick={()=>{navigate(-1)}}
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
                          <Supercol
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
          )
        </div>
        <h3>{}</h3>
      </Container>
    </div>
  );
};

export default SuperPage;
