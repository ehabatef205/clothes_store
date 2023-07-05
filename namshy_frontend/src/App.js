import React, { useEffect, useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Bag from "./pages/Bag";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { products } from "./components/section/prodlist";
import SelectedProductPage from "./pages/SelectedProductPage";
import Header from "./components/Navs/Hreader";
import Footer from "./components/Navs/footer";

function App() {
  
   return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path="/SelectedProductPage/:id" element={<SelectedProductPage products={products} ></SelectedProductPage>} />
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/clothing" element={<Page1/>}/> 
        <Route path="/newarrivals" element={<Page1/>}/> 
        <Route path="/shoes" element={<Page1/>}/> 
        <Route path="/bags" element={<Page1/>}/> 
        <Route path="/accessories" element={<Page1/>}/> 
        <Route path="/grooming" element={<Page1/>}/> 
        <Route path="/sport" element={<Page1/>}/> 
        <Route path="/premium" element={<Page1/>}/> 
        <Route path="/brand" element={<Page1/>}/> 
        <Route path="/gifts" element={<Page1/>}/> 
        <Route path="/sale" element={<Page1/>}/> 
        <Route path="/Bag" element={<Bag />} />
        <Route path="/" element={<Home section={"MEN"}/>} />
        <Route path="/men" element={<Home section={"MEN"}/>} />
        <Route path="/women" element={<Home section={"WOMEN"}/>} />
        <Route path="/beauty" element={<Home section={"BEAUTY"}/>} />
        <Route path="/kids" element={<Home section={"KIDS"}/>} />
        <Route path="/premiumCategory" element={<Home section={"PREMIUM"}/>} />
      </Routes> 

         <footer style={{height:"200px",backgroundColor:"black" ,position:"relative" ,top:"70px"}}><Footer/></footer> 

        
    </div>
  );
}

export default App; 

