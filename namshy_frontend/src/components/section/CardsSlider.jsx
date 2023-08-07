import React, { useState, useContext, useEffect } from "react";

import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as product from "../../api/product";
import { CartContext } from "./Shoppingcartcontext";
import * as Cart from '../../api/cart'
import * as Wish from '../../api/wish'
import { Cookies } from 'react-cookie'
import { update } from "../../api/personal_cookies";

export function CardsSlider(props) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const [personal, setpersonal] = useState({})
    const [selectedwCardIndex, setSelectedwCardIndex] = useState(-1);
    const handleButtonClick = (index) => {
        setSelectedCardIndex(index);
    };
    const handlewButtonClick = (index) => {
        setSelectedwCardIndex(index);
    };
    const update_p=async()=>{
      var p=await update()
      setpersonal(p)
    }

  const addToFavorites = async(id) => {
    await Wish.add_cart(id, 1, cookie.get("Auth")).then(e=>{update_p()})
    
    
  };
  const removefromFavorites = async(id) => {
    await Wish.Delete_cart_item(id, 1, cookie.get("Auth")).then(e=>{update_p()})
    
    
  };

  const cookie = new Cookies()
  const [Sizet, setSizet] = useState('');

  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {

    const getProducts = async () => {
      await product.get_product_by_category(props.id).then((e) => {
        setProducts(e.response);
      });
    };
    getProducts();
    update_p()
  }, []);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    navigate(`/SelectedProductPage/${product._id}`);
  };

  const addtoBag = async (id) => {
    await Cart.add_cart(id, 1, cookie.get("Auth")).then((e) => {
      update_p()
      
    })
  }

  return (
    <div className="containe d-flex mx-1">
      {products.map((product,index) => (
        <div className="carda my-2"
        style={{border:
          selectedCardIndex === index
              ? "1px solid #d99d2b"
              : selectedwCardIndex === index
                  ? "1px solid red"
                  : "0.5px solid #C8D2D1"}}
        key={product._id}>
          <div

            className="carousel-wrapper"
           
          >
            <Carousel controls={false}>
              {product.imageSrc.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                   onClick={() => handleImageClick(product)}
                    className="d-block w-100"
                    src={image}
                    alt={""}
                    style={{
                      width: "100%",
                      height: "250px",
                      height: "465px",
                    }}
                  />
                  <div className="caption position-absolute bottom-0 w-100 p-3 ">
                    <p className="mb-0">This item is added to your cart</p>
                    <div className="d-flex justify-content-center align-content-center gap-1">
                      {Object.keys(product.sizes).map((size, _) => (
                        <button 
                          style={{zIndex:"9999",backgroundColor:size===Sizet? 
                          "gray":"transparent",
                          color:size===Sizet? 
                          'white':"gray",}}
                          key={size}
                          className="btn btn-outline-secondary custom-style"
                          onClick={() =>{setSizet(size)}}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div
           
            className="card-body d-flex"
            style={{
              fontSize: "100%",
              padding: "0px",
              flexDirection: "flex-row",
              justifyContent: "space-between",

            }}
          >
            <div className=" d-flex flex-column align-items-start"
            onClick={() => handleImageClick(product)}
            style={{cursor:"pointer"}}
            >
              <Card.Title className="mb-0">{product.name}</Card.Title>
              <Card.Text className="mb-0">Price: {product.price_before}</Card.Text>
              <Card.Text> {product.desc.descreption}</Card.Text>
            </div>
            <span
              className="  h-75 "
              style={{ textAlign: "center", " margin-top": "10%" }}
            >
              <div>
                <button
                  className="btn text-light   "
                  style={{ backgroundColor: "#d99d2b", marginLeft: "2px" }}
                  onClick={() => {
                    if(personal?.wish?.includes(product._id))
                    {removefromFavorites(product._id)}
                    else{
                    addToFavorites(product._id)}
                    handlewButtonClick(index);
                  }}
                >
                  {personal?.wish?.includes(product._id)?
                        <i className="bi bi-heart-fill  text-danger"></i>
                        :
                            <i className="bi bi-heart "></i>}
                </button>

                <button
                  className="btn text-light  "
                  style={{ backgroundColor: "#d99d2b", marginLeft: "2px" }}
                  onClick={() => {
                    addtoBag(product._id)
                    handlewButtonClick(index);
                  }}
                >
                  {personal?.cart?.includes(product._id)?<i class="bi bi-check-square-fill "></i>:
                            <i class="bi bi-cart "></i>}
                </button>
              </div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
