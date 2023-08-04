import React, { useState, useContext, useEffect } from "react";

import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as product from "../../api/product";
import { CartContext } from "./Shoppingcartcontext";
import * as Cart from '../../api/cart'
import { Cookies } from 'react-cookie'

export function CardsSlider(props) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(1);
  const addToFavorites = () => {
    console.log("add to favorites");
  };
  const { addToCart } = useContext(CartContext);
  const cookie = new Cookies()

  const size = ["m", "l", "xl", "xxl"];
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {

    const getProducts = async () => {
      await product.get_product_by_category(props.id).then((e) => {
        setProducts(e.response);
        console.log(e.response)
      });
    };
    getProducts();
  }, []);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    navigate(`/SelectedProductPage/${product._id}`);
  };

  const addtoBag = async (id) => {
    await Cart.add_cart(id, 1, cookie.get("Auth")).then((e) => {
      console.log(e)
    })
  }

  return (
    <div className="containe d-flex mx-1">
      {products.map((product) => (
        <div className="carda my-2" key={product._id}>
          <div
            className="carousel-wrapper"
            onClick={() => handleImageClick(product)}
          >
            <Carousel controls={false}>
              {product.imageSrc.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
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
                      {size.map((size, _) => (
                        <button
                          key={size}
                          className="btn btn-outline-secondary custom-style"
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
              "justify-content": "space-between",
            }}
          >
            <div className=" d-flex flex-column align-items-start">
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
                  style={{ backgroundColor: "#d99d2b", marginRight: "2px" }}
                  onClick={() => addToFavorites()}
                >
                  <i className="bi bi-heart"></i>
                </button>

                <button
                  className="btn text-light  "
                  style={{ backgroundColor: "#d99d2b" }}
                  onClick={() => addtoBag(product._id)}
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
