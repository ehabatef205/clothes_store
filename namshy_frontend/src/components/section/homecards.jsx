import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import * as product from "../../api/product";

import Product from "./Product";
import './homecard.css'
export default function Homecards(
  {  type_name }
  ) {
  const category_id = window.location.pathname.split('/')[2];
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const getProducts = async () => {

      await product.get_product_by_type(category_id,type_name).then((e) => {

        setProducts(e.response);
      });
       
    };
    getProducts();
    
  }, []);

  
  return (

      <Container
        style={{
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
            "flex-direction": "row",
            justifyContent:"space-between"
          }}
        >
          <div style={{ display: "inline-flex", fontSize: "2rem" }}>
            <i class="bi bi-handbag-fill " style={{ marginLeft: "30px" }}></i>
            <h5 style={{ display: "inline-flex", padding: "13px" , whiteSpace: "nowrap",}}>
              {type_name}
            </h5>
          </div>
          <div style={{ display: "inline-flex", width: "100%", height: "75%","margin-left":"11%" }}>
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
        {products.length > 0 ? (
          products
            .filter((product) => {
              if (filter === "") {
                return true;
              } else {
                return product.category === filter;
              }
            })
            .map((product, index) => (
              <Product
                key={index}
                product={product}
                // index={index}
                // products={products}
                
              />
            ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      
      </Container>
    
  );
}

