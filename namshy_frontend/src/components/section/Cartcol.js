import React, { useContext, useState, useEffect } from "react";

import "./slider.css";
import * as productfetch from "../../api/product"
import * as wish from "../../api/wish"
import * as cartDB from "../../api/cart"
import { Cookies } from "react-cookie";

const Cartcol = ({ cart, load ,product }) => {

  
  const [active, setactive] = useState(true);

  const [Sizet, setSizet] = useState('m');

  const [Colort, setColort] = useState('red');
  
  const cookie = new Cookies();
  const addToFavorites = async (id) => {
    console.log("add to favorites");
    await wish.add_cart(id, 1, cookie.get("Auth")).then((e) => {
      console.log(e);
    });
  };


  

  const size = ["m", "l", "xl", "xxl"];
  const colors = ["red", 
    "black", 
    "brown", 
    "yellow",'green','purple'];


  return (
    <div className="">
      <div
        className="tow my-3  mx-5 d-flex flex-wrap"
        style={{ marginRight: "0px" }}
      >
        <div className="  d-flex col-12 col-lg-6">
          <div className="" style={{ textAlign: "center" }}>
            <div className="h-50 ">
              <span style={{ textAlign: "center" }}>Item Price</span>

              <p>{product?.price_after}</p>
            </div>
            <div className="h-50  " style={{ textAlign: "center" }}>

              <button
              
                onClick={() =>{
                  setactive(false)
                  if(active)
                   cartDB.increse_item(cart?._id).then(e => {
                  load()
                  setactive(true)
                })}}/*.then(e=>{setproduct(e)})*/
                className="btn m-1 btn-light"
              >
                <i class="bi bi-plus-lg"></i>
              </button>

              <input
                className="btn bg-light m-1"
                style={{width:"50px"}}
                value={cart.quantity}
              />

              <button
              
                onClick={() => {
                  if (cart.quantity !== 1)
                    setactive(false)
                    if(active)
                    cartDB.decrease_item(
                      cart?._id).then((e) => {
                        load()
                        setactive(true)
                      })
                }} /*.then(e=>{setproduct(e)})*/
                className=" btn m-1 btn-light"
              >
                <i class="bi bi-dash-lg"></i>
              </button>
            </div>
          </div>

          <div className="d-flex  flex-wrap " style={{ textAlign: "end" }}>
            <div className="m-3 ">
              <p style={{ margin: "0px", padding: "0px" }}>{/* {product?} */}</p>
              <p style={{ margin: "0px", padding: "0px" }}>{product?.name}</p>
              <div
                className="   justify-content-start my-3"
                style={{ textAlign: "left" }}
              >
                {" "}
                {size.map((size, index) => (
                  <button
                    style={{
                      zIndex: 3,
                      cursor: "pointer",
                      width: "70px",
                      borderRadius: "2px",
                      backgroundColor:size===Sizet? 
                      Colort:"transparent",
                      color:size===Sizet? 
                      'white':"gray",
                      
                    }}
                    key={index}
                    className="btn  btn-outline-secondary "

                    onClick={() =>{setSizet(size)}}
                  >
                    {size}
                  </button>
                ))}
                <div style={ {height:"30px"}}>{" \n"}</div>
                 
                {colors.map((color, index) => (
                  <button
                    style={{
                      zIndex: 3,
                      cursor: "pointer",
                      width: "70px",
                      borderRadius: "2px",
                      backgroundColor:color,
                      color:color,
                      
                    }}
                    key={index}
                    className="btn  btn-outline-secondary "

                    onClick={() =>{setColort(color)}}
                  >
                    0
                  </button>
                ))}
              </div>

              <div className="d-flex">
                <div className="m-2 ">
                  <button
                    className="btn"
                    onClick={() => cartDB.Delete_cart_item(cart._id).then(e => {
            
                      load()
                    })}
                  >
                    {" "}
                    <i class="bi bi-trash3">delete</i>
                  </button>
                </div>
                <div className=" m-2 text-secondary">|</div>
                <div className="m-2 ">
                  <button className="btn" onClick={() => { addToFavorites(cart.product_id) }}>
                    {" "}
                    <i className="bi bi-heart m-2">save later</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-12 col-lg-6">
          <img
            className="d-block w-100"
            alt={""}
            style={{
              height: "465px",
            }}
            src={Array.isArray(product?.imageSrc) && product.imageSrc.length > 0 ? product.imageSrc[0] : ""}
          />
        </div>
      </div>

      <div>
        <p>Sub Total Price: ${product?.price_after * cart?.quantity}</p>
      </div>
    </div>
  );
};

export default Cartcol;