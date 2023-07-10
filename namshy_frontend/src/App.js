import React, { useEffect, useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Bag from "./pages/Bag";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { products } from "./components/section/prodlist";
import SelectedProductPage from "./pages/SelectedProductPage";
import Footer from "./components/Navs/footer";
import Profile from "./pages/profile";
function App() {
  
   return (
    <div className="App">

      <Routes>
        <Route path="/SelectedProductPage/:id" element={<SelectedProductPage products={products} ></SelectedProductPage>} />
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/Bag" element={<Bag />} />
        <Route path="/" element={<Home section={"MEN"}/>} />
        <Route path="/men" element={<Home section={"MEN"}/>} />
        <Route path="/premiumCategory/*" element={<Page1 />} />
        <Route path="/women" element={<Home section={"WOMEN"}/>} />
        <Route path="/beauty" element={<Home section={"BEAUTY"}/>} />
        <Route path="/kids" element={<Home section={"KIDS"}/>} />
        <Route path="/premiumCategory" element={<Home section={"PREMIUM"}/>} />
        <Route path="/men/*" element={<Page1 />} />
        <Route path="/women/*" element={<Page1 />} />
        <Route path="/beauty/*" element={<Page1 />} />
        <Route path="/kids/*" element={<Page1 />} />
        <Route path="/profile" element={<Profile path={0}/>} />
        <Route path="/my-rewards" element={<Profile path={1}/>} />
        <Route path="/orders" element={<Profile path={2}/>} />
        <Route path="/returns" element={<Profile path={2}/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes> 

         <footer style={{height:"200px",backgroundColor:"black" ,position:"relative" ,top:"70px"}}><Footer/></footer> 

        
    </div>
  );
}

export default App; 

