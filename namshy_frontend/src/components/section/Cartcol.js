import React, { useContext, useState, useEffect } from "react";

import "./slider.css";
import * as wish from "../../api/wish";
import * as cartDB from "../../api/cart";
import { Cookies } from "react-cookie";
import { update } from "../../api/personal_cookies";

const Cartcol = ({ cart, load, product, personal, update_p }) => {
  const [active, setactive] = useState(true);

  const [fav, setfav] = useState(false);


  const cookie = new Cookies();
  const addToFavorites = async (id) => {
    setfav(true);
    await wish.add_cart(id, 1, cookie.get("Auth")).then(async (e) => {
      await update_p();
      setfav(false);
    });
  };

  return (
    <div className="">
      <div
        className="tow my-3  mx-5 d-flex flex-wrap justify-content-center"
        style={{ marginRight: "0px" }}
      >
        <div className=" flex-wrap  d-flex col-12 col-md-7 col-lg-7 ">
          <div className=" " style={{ textAlign: "center" ,width:"35%"}}>
            <div className="h-50 ">
              <span style={{ textAlign: "center" }}>Item Price</span>

              <p>{product?.price_after}</p>
            </div>
            <div className=""style={{ textAlign: "center", display: "flex", flexDirection: "row" }}>
              <button
                onClick={async () => {
                  if (product?.clothing) {
                    console.log(cart)
                    if (
                      cart.quantity !==
                      parseInt(product.quantity[cart.size][cart.color])
                    ) {
                      setactive(false);
                      if (active)
                        cartDB.increse_item(cart?._id).then(async (e) => {
                          await load();
                          setactive(true);
                        });
                    }
                  } else {
                    if (cart.quantity !== parseInt(product.quantity)) {
                      setactive(false);
                      if (active)
                        cartDB.increse_item(cart?._id).then(async (e) => {
                          await load();
                          setactive(true);
                        });
                    }
                  }
                }} /*.then(e=>{setproduct(e)})*/
                className="btn m-1 btn-light"
              >
                <i class="bi bi-plus-lg"></i>
              </button>

              {active ? (
                <input
                  className="btn bg-light m-1"
                  style={{ width: "50px" }}
                  value={cart.quantity}
                />
              ) : (
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
              <button
                onClick={async () => {
                  if (cart.quantity !== 1) setactive(false);
                  if (active) {
                    cartDB.decrease_item(cart?._id).then(async (e) => {
                      await load();
                      setactive(true);
                    });
                  }
                }} /*.then(e=>{setproduct(e)})*/
                className=" btn m-1 btn-light"
              >
                <i class="bi bi-dash-lg"></i>
              </button>
            </div>
          </div>

          <div className="d-flex flex-wrap " style={{ textAlign: "end",width:"65%" }}>
            <div className="m-3 ">
              <p style={{ margin: "0px", padding: "0px" }}>
                {/* {product?} */}
              </p>
              <p style={{ margin: "0px", padding: "0px" }}>{product?.name}</p>
              {(
                <div
                  className="   justify-content-start my-3"
                  style={{ textAlign: "left" }}
                >
                  {" "}
                  <button
                    style={{
                      zIndex: 3,
                      cursor: "pointer",
                      width: "70px",
                      borderRadius: "2px",
                      backgroundColor: "grey",
                      color: "white",
                    }}
                    className="btn  btn-outline-secondary "
                  >
                    {cart.size} 
                  </button>
                  <div style={{ height: "30px" }}>{" \n"}</div>
                  <button
                    style={{
                      zIndex: 3,
                      cursor: "pointer",
                      width: "70px",
                      borderRadius: "2px",
                      backgroundColor: '#'+cart.color,
                      color: '#'+cart.color,
                    }}
                    className="btn  btn-outline-secondary "
                  >
                    {cart.size}
                  </button>
                </div>
              ) }

              <div className="d-flex">
                <div className="m-2 ">
                  <button
                    className="btn"
                    onClick={() =>
                      
                      cartDB.Delete_cart_item(cart._id).then((e) => {
                        window.location.reload();
                        window.scrollTo(0,0)
                        load();
                        update_p()
                      })
                    }
                  >
                    {" "}
                    <i class="bi bi-trash3">delete</i>
                  </button>
                </div>
                <div className=" m-2 text-secondary">|</div>
                <div className="m-2 ">
                  {fav ? (
                    <div class="spinner-border text-danger" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  ) :
                    (
                      <button
                        className="btn"
                        onClick={() => {
                          addToFavorites(product._id);
                        }}
                        disabled={personal?.wish?.includes(product?._id)}
                      >
                        {" "}
                        {personal?.wish?.includes(product?._id) ? (
                          <i className="bi bi-heart-fill m-2 text-danger">
                            Saved
                          </i>
                        ) : (
                          <i className="bi bi-heart m-2">save later</i>
                        )}
                      </button>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-12 col-md-5 col-lg-5 ">
          <img
            // className="w-100"
            alt={""}
            style={{
              height: "100%",
              width:"100%"
            }}
            src={
              Array.isArray(product?.imageSrc) && product.imageSrc.length > 0
                ? product.imageSrc[0]
                : ""
            }
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
