import {React, useState, useRef, useEffect} from "react";
import {useLocation}from 'react-router-dom'
import addOrder from "../api/addOrder"
import * as productsapi from '../api/product'
const Checkout=()=>{
    const location = useLocation();
    const carts = location.state;
    const [products,setProducts]=useState([])
    const [priceProducts,setPriceProducts]=useState([])
    var allPrice = 0
    var loop=0
    const addProducts = async() => {
        allPrice=0
        for(var i = 0; i < carts.length; i++){
          const product = {product_id:carts[i].product_id, quantity: carts[i].quantity}
          setProducts(products => [...products, product]) 
          await productsapi.get_product_by_id(carts[i].product_id).then(async (product1)=>{
            
            allPrice = allPrice + (product1.price_after * carts[i].quantity)
          })
        }
  
        setPriceProducts(allPrice)
       
      }
    useEffect(()=>{
        if(loop===0){
        loop+=1
        addProducts()}
    },[])
    useEffect(()=>{
        console.log(products)
    },[products])

    
  const phone = useRef(null); 
  const country = useRef(null);
  const firstName = useRef(null); 
  const lastName = useRef(null);
  const address = useRef(null); 
  const city = useRef(null);
  const zipCode = useRef(null);

  const finalize=async()=>{
    await addOrder(products, phone.current.value, country.current.value, firstName.current.value, lastName.current.value, address.current.value, city.current.value, zipCode.current.value, priceProducts).then(async res => {
        console.log(res.data)
      })
  }

    return(<div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <input
          ref={country}
          style={inputText5}
          placeholder="الدولة"
          type="text"
        />
        <input
          ref={phone}
          style={inputText5}
          placeholder="رقم الهاتف"
          type="phone"
        />
        <input
          ref={lastName}
          style={inputText5}
          placeholder="الاسم الاخير"
          type="text"
        />
        <input
          ref={firstName}
          style={inputText5}
          placeholder="الاسم الاول"
          type="text"
        />
        <input
          ref={address}
          style={inputText5}
          placeholder="العنوان بالتفصيل"
          type="text"
        />
        <input
          ref={city}
          style={inputText5}
          placeholder="المحافظة"
          type="text"
        />
        <input
        ref={zipCode}
          style={inputText5}
          placeholder="الرقم البريدي"
          type="text"
        />
        <div style={divPrice}>السعر الكلي: ${priceProducts}</div>
        
        <button
                      className="btn text-light my-3 h-50 w-100"
                      onClick={() => {finalize()}}
                      style={{ backgroundColor: "blue" }}
                      disabled={localStorage.getItem("Authorization") === null}
                    >
                      finalize
                    </button>


      </div>)
}
const inputText5 = {
    border: "1px solid #000",
    borderRadius: "15px",
    width: "calc(50% - 20px)",
    padding: "10px",
    marginTop: "20px",
    textAlign: "right",
    margin: "10px"
  }
  
const divPrice = {
    borderRadius: "15px",
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    textAlign: "center",
    margin: "10px",
}

export default Checkout;

