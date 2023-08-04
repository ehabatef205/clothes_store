import React, { useContext } from 'react';
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import { CartContext} from './Shoppingcartcontext'
import { useNavigate } from "react-router-dom";
import * as product from '../../api/product'
import useMediaQuery from "@material-ui/core/useMediaQuery";
export default function ThirdSlider({ id }) {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(1);
  const addToFavorites = () => {
      console.log("add to favorites")
  }
  const handlewButtonClick = (index) => {
    setSelectedwCardIndex(index);
  };
  const [selectedwCardIndex, setSelectedwCardIndex] = useState(1);

  const handleButtonClick = (index) => {
      setSelectedCardIndex(index);
    };
  const { addToCart } = useContext(CartContext);

  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleImageClick = (product) => {
    setSelectedProduct(product);
    navigate(`/SelectedProductPage/${product._id}`);
  };

  const cardData = [
    { id:1,
      src: " https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Card 1 text",
      price:500,
    },
    {id:2,
      src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Card 2 text",
      price:500,
    },
    {id:3,
      src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Card 3 text",
      price:500,
    },
    {id:4,
      src: " https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Card 1 text",
      price:500,
    },
    {id:5,
      src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Card 2 text",
      price:500,
    },
  ];
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <Container
      className="  d-flex justify-content-center "
      style={{ boxSizing: "border-box" }}
    >
      <div className=" w-100 sec  ">
        <div id={id} className="carousel slide w-100" data-bs-ride="carousel">
          <div className="carousel-inner w-100 ">
            <div className="carousel-item active w-100  ">
              <div className="mo d-flex  w-100 ">
              {cardData.slice(0, isSmallScreen ?  2: cardData.length).map((card, index) => (
                  <Card
                    className="mx-3 "
                    style={{  border: selectedCardIndex === index
                      ? '1px solid #d99d2b'
                      : selectedwCardIndex === index
                      ? '1px solid red'
                      : '0.5px solid #C8D2D1',width: "18rem"}}
                    key={index}
                  >
                    <Card.Img variant="top" src={card.src} onClick={() => handleImageClick(product)}/>
                    <Card.Body className="d-flex justify-content-between">
                      <div className="col-6">
                      <Card.Title>Card {index + 1} Title</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      </div>
                         <div className="col-6">
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
                              addToCart(card.id);
                              handleButtonClick(index);
                            }}
                        >
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
             <div className="carousel-item">
              <div className="mo d-flex ">
              {cardData.slice(0, isSmallScreen ?  2: cardData.length).map((card, index) => (
                  <Card
                    className="mx-3 "
                    style={{  border: selectedCardIndex === index
                      ? '1px solid #d99d2b'
                      : selectedwCardIndex === index
                      ? '1px solid red'
                      : '0.5px solid #C8D2D1',width: "18rem" }}
                    key={index}
                  >
                    <Card.Img variant="top" src={card.src}onClick={() => handleImageClick(product)} />
                    <Card.Body className="d-flex justify-content-between">
                      <div className="col-6">
                      <Card.Title>Card {index + 1} Title</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      </div>
                         <div className="col-6">
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
                              addToCart(card.id);
                              handleButtonClick(index);
                            }}
                        >
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div> 
            <div className="carousel-item">
              <div className="mo d-flex ">
              {cardData.slice(0, isSmallScreen ?  2: cardData.length).map((card, index) => (
                  <Card
                    className="mx-3 "
                    style={{ border: selectedCardIndex === index
                      ? '1px solid #d99d2b'
                      : selectedwCardIndex === index
                      ? '1px solid red'
                      : '0.5px solid #C8D2D1', width: "18rem" }}
                    key={index}
                  >
                    <Card.Img variant="top" src={card.src} onClick={() => handleImageClick(product)} />
                    <Card.Body className="d-flex justify-content-between">
                      <div className="col-6">
                      <Card.Title>Card {index + 1} Title</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      </div>
                         <div className="col-6">
                        <button
                            className="btn text-light   "
                            style={{ backgroundColor: "#d99d2b" ,marginRight: "2px"}}
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
                              addToCart(card.id);
                              handleButtonClick(index);
                            }}
                            
                        >
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            style={{ left: "-180px" , height:"fit-content", top:"165px"}}
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon  text-bg-dark"
              style={{ right: "-81px" }}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            style={{ right: "-100px", height:"fit-content", top:"165px" }}
            data-bs-target={`#${id}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon text-bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Container>
  );
}
