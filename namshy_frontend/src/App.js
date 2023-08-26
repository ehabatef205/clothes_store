import React, { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Home from "./pages/home";
import Bag from "./pages/Bag";
import Page1 from "./pages/page1";
import Login from "./pages/login";
import Signup from "./pages/signup";
import SuperPage from "./pages/superpage";
import Checkout from "./pages/checkout";
import { products } from "./components/section/prodlist";
import SelectedProductPage from "./pages/SelectedProductPage";
import Footer from "./components/Navs/footer";
import Profile from "./pages/profile";
import Wishlist from "./pages/Wishlist";
import Page2 from "./pages/page2";
import { Cookies } from 'react-cookie'

// import CartItems from "./pages/CartItems";
import ShoppinghcartProvider from './components/section/Shoppingcartcontext'
import { update } from "./api/personal_cookies";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const cookie = new Cookies()

  const [personal, setpersonal] = useState({})
  const update_p = async () => {
    if (cookie.get('Auth')) {
      var p = await update()
      console.log(p)
      setpersonal(p)
    } else {
      setpersonal({ cart: [], wish: [] })
    }
  }

  React.useEffect(() => {
    // Redirect only when the current path is "/"
    if (location.pathname === "/") {
      navigate("/cat/64ad46be5e38ca8f15f8e52b");
    }
  }, [navigate, location]);
  return (

    <ShoppinghcartProvider className="App">


      <Routes>

        <Route path="/SelectedProductPage/:id" element={<SelectedProductPage products={products} update_p={update_p} personal={personal}></SelectedProductPage>} />

        <Route path="Bag" element={<Bag update_p={update_p} personal={personal}/>} />
        <Route path="favorites" element={<Wishlist />} />

        <Route path="/" element={<Home update_p={update_p} personal={personal} />} />
        <Route path="/cat/:id" element={<Home update_p={update_p} personal={personal} />} />
        <Route path="/cat/:id/:subid" element={<Page1 update_p={update_p} personal={personal}/>} />
        <Route path="/search/*" element={<Page2 update_p={update_p} personal={personal}/>} />
        <Route path="/wishlist" element={<Wishlist update_p={update_p} personal={personal}/>} />
        <Route path="/super/*" element={<SuperPage update_p={update_p} personal={personal}/>} />
        <Route path="/profile" element={<Profile path={0} update_p={update_p} personal={personal} />} />
        <Route path="/returns" element={<Profile path={1}  update_p={update_p} personal={personal}/>} />
        <Route path="/orders" element={<Profile path={2}  update_p={update_p} personal={personal}/>} />
        <Route path="/returns" element={<Profile path={2} update_p={update_p} personal={personal} />} />
        <Route path="/login" element={<Login update_p={update_p} personal={personal} />} />
        <Route path="/signup" element={<Signup  update_p={update_p} personal={personal}/>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <footer style={{ height: "200px", backgroundColor: "black", position: "relative", top: "70px" }}><Footer /></footer>


    </ShoppinghcartProvider>
  );
}

export default App; 
