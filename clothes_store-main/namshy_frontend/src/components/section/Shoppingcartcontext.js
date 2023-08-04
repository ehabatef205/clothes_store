

// export default ShoppinghcartProvider
import { createContext, useEffect, useState } from "react";
// import product from "../path/to/product.js";
import * as product from "../../api/product";
import * as prod_cat from '../../api/product_category'

export const CartContext = createContext(null);

export const ShoppinghcartProvider = (props) => {
  // const { category_id } = props;

  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   const getCategory = async () => {
  //     await prod_cat.all_product_category().then((e) => {
  //       setCategories(e.response);
  //     });
  //   };
  //   getCategory();
  // }, []);

  // const [products, setProducts] = useState([]);
  // const [filter, setFilter] = useState("");
  // useEffect(() => {
  //   const getProducts = async () => {
  //     await product.get_product_by_category(category_id).then((e) => {
  //       setProducts(e);
  //     });
  //   };
  //   getProducts();
  // }, [category_id]);

  const [cartItems, setCartItems] = useState({});

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       // Assuming you have access to the list of products with their details
  //       // Replace 'products' with the actual variable containing your product data
  //       const itemInfo = categories
  //         .map((category, index) => (
  //           products.find((product) => product.id === item)
  //         ))
  //         .filter((item) => item !== undefined)[0];
  //       if (itemInfo) {
  //         totalAmount += cartItems[item] * itemInfo.price;
  //       }
  //     }
  //   }
  //   return totalAmount;
  // };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const currentValue = prev[itemId] || 0;
      return { ...prev, [itemId]: currentValue + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: 0 };
    });
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prev) => {
      const currentValue = prev[itemId] || 0;
      return { ...prev, [itemId]: currentValue - 1 };
    });
  };

  const contextValues = {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart
  };

  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ShoppinghcartProvider;