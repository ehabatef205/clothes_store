import React, { useState, useEffect } from "react";
import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as product from '../../api/product'

export function CardsSlider() {
  const size = ["m", "l", "xl", "xxl"]
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      await product.all_product().then(e => {
        setProducts(e.response)
      })
    }
    getProducts()
  },[])

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    navigate(`/SelectedProductPage/${product._id}`);
  };

  return (
    <div className="containe d-flex mx-1">
      {products.map((product) => (
        <div
          className="carda"
          key={product._id}
          
        >
          <div className="carousel-wrapper" onClick={() => handleImageClick(product)}>
            <div className="FavoriteBorderOutlinedIcon d-flex flex-column custom-style">
              <i className="bi bi-heart"></i>
            </div>
            <Carousel controls={false}>
              {product.imageSrc.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={""}
                  />
                  <div className="caption position-absolute bottom-0 w-100 p-3">
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
            style={{ fontSize: "100%", padding: "0px" ,flexDirection:"flex-row","justify-content": "space-between"}}
          >
            <div className="  d-flex flex-column align-items-start">
           
              <Card.Title className="mb-0">{product.name}</Card.Title>
              <Card.Text className="mb-0">Price: {product.price}</Card.Text>
              <Card.Text> {product.desc}</Card.Text>
            </div>
            <span className="  h-75 " style={{ textAlign: "center" ," margin-top":"10%" }}>
              <button
                className="btn text-light h-100 w-100"
                style={{ backgroundColor: "#7DCEA0" }}
              >
                Add To Bag
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
