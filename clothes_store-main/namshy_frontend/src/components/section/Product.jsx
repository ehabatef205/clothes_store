
import React, { useState, useContext } from 'react';
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import './homecard.css';
import { CartContext } from './Shoppingcartcontext';
import { useNavigate } from "react-router-dom";
import * as Cart from '../../api/cart'
import { Cookies } from 'react-cookie'

export function Product({ product, index }) {
    const handlewButtonClick = (index) => {
        setSelectedwCardIndex(index);
      };
      const [selectedwCardIndex, setSelectedwCardIndex] = useState(1);
    
    const { addToCart } = useContext(CartContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleButtonClick = (index) => {
        setSelectedCardIndex(index);
      };
    const navigate = useNavigate();
    const [selectedCardIndex, setSelectedCardIndex] = useState(1);
    const cookie = new Cookies()
    const addToFavorites = () => {
        console.log("add to favorites")
    }

    const handleImageClick = (product) => {
        setSelectedProduct(product);
        navigate(`/SelectedProductPage/${product._id}`);
    };

    const addtoBag = async (id) => {
        await Cart.add_cart(id, 1, cookie.get("Auth")).then((e) => {
            console.log(e)
        })
    }

    //   console.log("card",product)
    return (
        <div>
            <div
                className="card m-2 carousel-wrapper"
                key={index}
                style={{
                    border: selectedCardIndex === index
    ? '1px solid #d99d2b'
    : selectedwCardIndex === index
    ? '1px solid red'
    : '0.5px solid #C8D2D1',width: "288px",
                    height: "320px",
                }}
               
            >

                <Carousel controls={false} style={{ justifyContent: "center" }} onClick={() => {
  handleImageClick(product);
 
}}>
                    {product.imageSrc.map((image, index) => (

                        <Carousel.Item key={index}>

                            <img
                                className="d-block  "
                                style={{
         

                                    width: "90%",
                                    height: "250px",
                                    margin: "auto",
                                    "border-radius": "10px",
                                }}
                                src={image}
                                alt={""}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div
                    className="card-body my-2 d-flex   justify-content-between"
                    style={{ fontSize: "15px", padding: "5px" }}
                >
                    <div className="d-flex flex-column align-items-start ">
                        <Card.Title className="mb-0">{product.name}</Card.Title>
                        <Card.Text className="mb-0">Price: {product.price_after}</Card.Text>
                    </div>
                    <div>
                        <button
                            className="btn text-light   "
                            style={{ backgroundColor: "#d99d2b", marginRight: "2px" }}
                            
                            onClick={() => {
                                addToFavorites();
                                handlewButtonClick(index);
                              }}
                        >
                            <i className="bi bi-heart"></i>
                        </button>

                        <button
                            className="btn text-light  "
                            style={{ backgroundColor: "#d99d2b" }}
                            onClick={() => {
                                addtoBag(product._id);
                                handleButtonClick(index);
                              }}
                        >
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
