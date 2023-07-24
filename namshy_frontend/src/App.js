import React, { useEffect, useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Bag from "./pages/Bag";
import Page1 from "./pages/page1";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { products } from "./components/section/prodlist";
import SelectedProductPage from "./pages/SelectedProductPage";
import Footer from "./components/Navs/footer";
import Profile from "./pages/profile";
import * as prod_cat from './api/product_category'

// import CartItems from "./pages/CartItems";
import ShoppinghcartProvider from './components/section/Shoppingcartcontext'
function App() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCategory = async () => {
      await prod_cat.all_product_category().then(e => {
        setCategories(e.response)
      })
    }
    getCategory()
  },[])
   return (
    // <div className="App">
  <ShoppinghcartProvider className="App">


      <Routes>

        <Route path="/SelectedProductPage/:id" element={<SelectedProductPage products={products} ></SelectedProductPage>} />     
   
        <Route path="Bag" element={<Bag/>} />

        <Route path="/" element={<Home />} />
        <Route path="/cat/:id" element={<Home />} />
        <Route path="/cat/:id/:subid" element={<Page1 />} />
        <Route path="/profile" element={<Profile path={0}/>} />
        <Route path="/my-rewards" element={<Profile path={1}/>} />
        <Route path="/orders" element={<Profile path={2}/>} />
        <Route path="/returns" element={<Profile path={2}/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes> 

         <footer style={{height:"200px",backgroundColor:"black" ,position:"relative" ,top:"70px"}}><Footer/></footer> 

        
    </ShoppinghcartProvider>
  );
}

export default App; 

