
import React, { useState, useEffect, useContext } from "react";
import * as product from "../api/product";
import { CartContext } from "../components/section/Shoppingcartcontext";
import Cartcol from "../components/section/Cartcol";


 
const Cart = ({ category_id, category_name }) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const {  cartItems } = useContext(CartContext);
  console.log("item",cartItems)
  console.log()
  useEffect(() => {
    const getProducts = async () => {
      await product.get_product_by_category(category_id).then((e) => {
        setProducts(e);
      });
    };
    getProducts();
  }, [category_id]);
console.log(Object.keys(cartItems).length )

       
      {/* { Object.keys(cartItems).length===0 ||  Object.values(cartItems).every((value) => value === 0)? ( */}
        
         return (
            <div>
              <div>  
                
                <div className="d-flex justify-content-around flex-wrap">
                {products
                  .filter((product) => cartItems[product._id] > 0)
                  .map((product, index) => (
        <div>
                    <Cartcol key={index} product={product} />
                    </div>
                     
                  ))}
              </div>
          
            </div>
        </div>
      );
    };
    
    export default Cart;
    