import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./Shoppingcartcontext";
import "./slider.css";
const Cartcol = ({ product }) => {
  const { cartItems, removeFromCart, decreaseQuantity, addToCart } =
    useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    for (const productId in cartItems) {
      total += product.price * cartItems[productId];
    }
    setTotalPrice(total);
  }, [cartItems, product]);
  const size = ["m", "l", "xl", "xxl"];
  return (
    <div className="">
      <div
        className="tow my-3  mx-5 d-flex flex-wrap"
        style={{ marginRight: "0px" }}
      >
        <div className="  d-flex col-12 col-lg-6">
          <div className="" style={{ textAlign: "center" }}>
            <div className="h-50 ">
              <span style={{ textAlign: "center" }}>producprice</span>

              <p>{product.price * cartItems[product._id]}</p>
            </div>
            <div className="h-50  " style={{ textAlign: "center" }}>
              <button
                onClick={() => addToCart(product._id)}
                className="btn m-1 btn-light"
              >
                <i class="bi bi-plus-lg"></i>
              </button>
              <input
                className="btn w-25 bg-light m-1"
                value={cartItems[product._id]}
              />
              <button
                onClick={() => decreaseQuantity(product._id)}
                className=" btn m-1 btn-light"
              >
                <i class="bi bi-dash-lg"></i>
              </button>
            </div>
          </div>

          <div className="d-flex  flex-wrap " style={{ textAlign: "end" }}>
            <div className="m-3 ">
              <p style={{ margin: "0px", padding: "0px" }}>{/* {product} */}</p>
              <p style={{ margin: "0px", padding: "0px" }}>{product.name}</p>
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
                    }}
                    key={index}
                    className="btn  btn-outline-secondary "
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="d-flex">
                <div className="m-2 ">
                  <button
                    className="btn"
                    onClick={() => removeFromCart(product._id)}
                  >
                    {" "}
                    <i class="bi bi-trash3">delete</i>
                  </button>
                </div>
                <div className=" m-2 text-secondary">|</div>
                <div className="m-2 ">
                  <button className="btn">
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
            src={product.imageSrc[0]}
          />
        </div>
      </div>

      <div>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cartcol;
