import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./Shoppingcartcontext";
import "./slider.css";
import* as productfetch from "../../api/product"
import * as cart from "../../api/cart"

const Cartcol = ({ product, updateTotalPrice, renderedIndex }) => {
  const[price_after,setPrice_after]=useState(0)
  const [data, setData] = useState(false); 
  const [mytotalstate,setMyTotalState]=useState(0)

const [currentproduct, setCurrentProduct] = useState({});
useEffect(() => {
  productfetch.get_product_by_id(product.product_id).then(e=>{  
    setPrice_after(e.price_after)
    setCurrentProduct(e)})
}, [data]);


  const {  decreaseQuantity, addToCart } =
    useContext(CartContext);

  useEffect(() => {
    let total = 0;
      if(price_after>0 && mytotalstate===0) {
       setMyTotalState(mytotalstate+1)
      total += currentproduct.price_after * product.quantity;
      console.log(total)
      updateTotalPrice(total);}
  }, [currentproduct]);


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
              <span style={{ textAlign: "center" }}>Item Price</span>

              <p>{currentproduct?.price_after }</p>
            </div>
            <div className="h-50  " style={{ textAlign: "center" }}>
              <button
                onClick={() => cart.increse_item(product?._id).then(e => {
                  window.location.reload(false)
                })}/*.then(e=>{setCurrentProduct(e)})*/
                className="btn m-1 btn-light"
              >
                <i class="bi bi-plus-lg"></i>
              </button>
              <input
                className="btn w-25 bg-light m-1"
                value={product.quantity}
              />
              <button
                onClick={() =>
                  { if (product.quantity!==1)
                  cart.decrease_item(
                    product?._id).then((e) => {
                    window.location.reload(false);
                  })}} /*.then(e=>{setCurrentProduct(e)})*/
                className=" btn m-1 btn-light"
              >
                <i class="bi bi-dash-lg"></i>
              </button>
            </div>
          </div>

          <div className="d-flex  flex-wrap " style={{ textAlign: "end" }}>
            <div className="m-3 ">
              <p style={{ margin: "0px", padding: "0px" }}>{/* {currentproduct?} */}</p>
              <p style={{ margin: "0px", padding: "0px" }}>{currentproduct?.name}</p>
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
                    onClick={() => cart.Delete_cart_item(product._id).then(e => {
                      window.location.reload(false)
                    })}
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
            src={Array.isArray(currentproduct?.imageSrc) && currentproduct.imageSrc.length > 0 ? currentproduct.imageSrc[0] : ""}
          />
        </div>
      </div>

      <div>
        <p>Sub Total Price: ${currentproduct?.price_after*product?.quantity}</p>
      </div>
    </div>
  );
};

export default Cartcol;
