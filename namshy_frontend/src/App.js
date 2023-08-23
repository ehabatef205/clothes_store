import React from "react";
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

// import CartItems from "./pages/CartItems";
import ShoppinghcartProvider from './components/section/Shoppingcartcontext'
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    // Redirect only when the current path is "/"
    if (location.pathname === "/") {
      navigate("/cat/64ad46be5e38ca8f15f8e52b"); 
    }
  }, [navigate, location]);
   return (
    
  <ShoppinghcartProvider className="App">


      <Routes>

        <Route path="/SelectedProductPage/:id" element={<SelectedProductPage products={products} ></SelectedProductPage>} />     
   
        <Route path="Bag" element={<Bag/>} />
        <Route path="favorites" element={<Wishlist/>} />

        <Route path="/" element={<Home />} />
        <Route path="/cat/:id" element={<Home />} />
        <Route path="/cat/:id/:subid" element={<Page1 />} />
        <Route path="/search/*" element={<Page2/>} />
        <Route path="/super/*" element={<SuperPage/>} />
        <Route path="/profile" element={<Profile path={0}/>} />
        <Route path="/returns" element={<Profile path={1}/>} />
        <Route path="/orders" element={<Profile path={2}/>} />
        <Route path="/returns" element={<Profile path={2}/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes> 

         <footer style={{height:"200px",backgroundColor:"black" ,position:"relative" ,top:"70px"}}><Footer/></footer> 

        
    </ShoppinghcartProvider>
  );
}

export default App; 
