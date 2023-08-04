import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./Shoppingcartcontext";
import "./slider.css";
import * as productfetch from "../../api/product"
import * as cart from "../../api/cart"


import { Cookies } from "react-cookie";
const Wishlistcol = ({ product,  renderedIndex }) => {
    const cookie = new Cookies();
    const addtoBag = async (id) => {
    await cart.add_cart(id, 1, cookie.get("Auth")).then((e) => {
        console.log(e);
      });
    };
  const [data, setData] = useState(false);
  const [mytotalstate, setMyTotalState] = useState(0)

  const [currentproduct, setCurrentProduct] = useState({});
  useEffect(() => {
    productfetch.get_product_by_id(product.product_id).then(e => {
    
      setCurrentProduct(e)
    })
  }, [data]);


  const { decreaseQuantity, addToCart } =
    useContext(CartContext);




  return (
    <div className="">
      <div
        className="tow my-3  mx-5 d-flex flex-wrap"
        style={{ marginRight: "0px" }}
      >
      
        <div className=" col-12 ">
          <img
            className="d-block w-100"
            alt={""}
            style={{
              height: "465px",
            }}
            src={Array.isArray(currentproduct?.imageSrc) && currentproduct.imageSrc.length > 0 ? currentproduct.imageSrc[0] : ""}
          />
        </div>
        <div className="  d-flex flex-wrap col-12  m-3 " style={{ textAlign: "center" }}>
         
             <span className="col-12 my-1" style={{ fontWeight: 'bold' }}><p  style={{ margin: "0px", padding: "0px" }}>{currentproduct?.name}</p></span>
             
           <div className=" col-12 my-1 " >
             <span style={{ textAlign: "center" }}>Item Price : {currentproduct?.price_after}</span>
           </div>
       
         

             <div className="d-flex justify-content-center  col-12" style={{ textAlign: "center"  }}>
               <div className="my-1 ">
                 <button
                   className="btn"
                   onClick={() => cart.Delete_cart_item(product._id).then(e => {
                     window.location.reload(false)
                   })}
                 >
                   {" "}
                   <i class="bi bi-trash3">Delete</i>
                 </button>
               </div>
               <div className=" my-1 text-secondary ">|</div>
               <div className="my-1">
                 <button className="btn" 
                 onClick={()=>{addtoBag(product._id)}}>
                   {" "}
                   <i className="bi bi-cart m-2">Add to cart</i>

                 </button>

                 </div>
             </div>
          
         </div>
      </div>

     
    </div>
  );
};

export default Wishlistcol;