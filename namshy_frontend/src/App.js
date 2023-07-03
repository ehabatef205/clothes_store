import React, { useEffect, useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Bag from "./pages/Bag";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { products } from "./components/section/prodlist";
import SelectedProductPage from "./pages/SelectedProductPage";
import Header from "./components/Navs/Hreader";

function App() {
  
   return (
    <div className="App">

  <Header></Header>
       <Routes>
        <Route path="/SelectedProductPage/:id" element={<SelectedProductPage products={products} ></SelectedProductPage>} />
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/page1" element={<Page1/>}/> 
         <Route path="/Bag" element={<Bag />} />
         <Route path="/" element={<Home />} /> 
      </Routes> 
         <footer style={{height:"200px",backgroundColor:"black" ,position:"relative" ,top:"70px"}}></footer> 
        
    </div>
  );
}

export default App; 

