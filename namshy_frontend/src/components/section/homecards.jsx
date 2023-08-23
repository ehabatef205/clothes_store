import React, { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import * as product from "../../api/product";
import * as user from "../../api/user";
import Supers from "./supers";

import * as superddeals from "../../api/superdeals";

import Product from "./Product";
import './homecard.css'

export default function Homecards(
  {  type_name,personal,update_p }
  ) {
  const category_id = window.location.pathname.split('/')[2];
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const getProducts = async () => {
      if(type_name==="Viewed products"){
        await user.viewed().then((e) => {
          setProducts(e.data.response);
        });
      }
      else if(type_name==="Super deals"){
        await superddeals.getall().then((e) => {
          setProducts(e.data.response)
        });
      }
else{
  await product.get_product_by_type(category_id,type_name).then((e) => {

    setProducts(e.response);
  });
    }
    };
    getProducts();
    
  }, []);

  
  return (

      <Container
        style={{
          display:"flex",
          flexDirection:"column",
          justifyContent: "center",
          backgroundColor: "rgba(178, 182, 186, 0.219)",
          marginTop:"4%",
          borderRadius: "30px",
        }}
      >
        <div
          style={{
            overflowY: "auto",
            height: "70px",
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-between"
            ,marginTop:"20px"
          }}
        >
          <div style={{ display: "inline-flex", fontSize: "2rem" }}>
            <i className="bi bi-handbag-fill " style={{ marginLeft: "30px" }}></i>
            <h5 style={{ display: "inline-flex", padding: "13px" , whiteSpace: "nowrap",}}>
              {type_name}
            </h5>
          </div>
          <div style={{ display: "inline-flex", width: "100%", height: "75%",marginLeft:"11%" }}>
            <div
              className="btn btnfilter mx-2 d-flex"
              style={{
                hight: "80%",
                justifyContent: "center",

                backgroundColor: filter!=="New Arrivals"?
                "rgba(178, 182, 186, 0.219)":"#f2c43d"
                ,
                borderRadius: "26px",
                border: "1.5px solid rgba(178, 182, 186, 0.219)",
                margin: "auto",
              }}
              onClick={(e) => { setFilter (e.target.id); }}
              role="button"
              id="New Arrivals"
            >
              New Arrivals
            </div>

            <div
              className="btn btnfilter mx-2 d-flex"
              style={{
                hight: "80%",
                justifyContent: "center",
                backgroundColor: filter!=="Clothing"?
                "rgba(178, 182, 186, 0.219)":"#f2c43d"
                ,
                borderRadius: "26px",
                border: "1.5px solid rgba(178, 182, 186, 0.219)",
                margin: "auto",

                
              }}
              onClick={(e) => { setFilter (e.target.id); }}
              role="button"
              id="Clothing"
            >
              Clothing
            </div>
            <div
              className="btn btnfilter mx-2 d-flex"
              style={{
                hight: "80%",
                justifyContent: "center",
                backgroundColor: filter!=="Shoes"?
                "rgba(178, 182, 186, 0.219)":"#f2c43d"
                ,
                borderRadius: "26px",
                border: "1.5px solid rgba(178, 182, 186, 0.219)",
                margin: "auto",
              }}
              onClick={(e) => { setFilter (e.target.id); }}
              role="button"
              id="Shoes"
            >
              Shoes
            </div>
            <div
              className="btn btnfilter mx-2 d-flex"
              style={{
                hight: "80%",
                justifyContent: "center",
                backgroundColor: filter!=="Bags"?
                "rgba(178, 182, 186, 0.219)":"#f2c43d"
                ,
                borderRadius: "26px",
                border: "1.5px solid rgba(178, 182, 186, 0.219)",
                margin: "auto",
              }}
              onClick={(e) => { setFilter(e.target.id); }}
              role="button"
              id="Bags"
            >
              Bags
            </div>
            <div
              className="btn btnfilter mx-2 d-flex"
              style={{
                hight: "80%",
                justifyContent: "center",
                backgroundColor: filter!=="Accessories"?
                "rgba(178, 182, 186, 0.219)":"#f2c43d"
                ,
                borderRadius: "26px",
                border: "1.5px solid rgba(178, 182, 186, 0.219)",
                margin: "auto",
              }}
           onClick={(e) => { setFilter(e.target.id); }}
              role="button"
              id="Accessories"
            >
              Accessories
            </div>
          </div>
        </div>
        
        <div className="d-flex justify-content-around flex-wrap">
        {products?.length > 0 ? (
          products
            .filter((product) => {
              if (filter === "") {
                return true;
              } else {
                return product.category === filter;
              }
            })
            .map((product, index) => (
              type_name==="Super deals"?(<Supers
                key={index}
                product={product}
                personal={personal}
                update_p={update_p}
                
              />)
            :
              (<Product
                key={index}
                product={product}
                personal={personal}
                update_p={update_p}
                
              />)
            ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      
      </Container>
    
  );
}

