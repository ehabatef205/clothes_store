
import React, { useState, useContext, useEffect, useRef } from "react";

import "./slider.css";
import { getAvailableColorsAndSizes } from "../../pages/color-size.js";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as product from "../../api/product";

import * as Wish from '../../api/wish'
import { Cookies } from 'react-cookie'

export function SearchSlider(props) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const [selectedwCardIndex, setSelectedwCardIndex] = useState(-1);

  const handlewButtonClick = (index) => {
    setSelectedwCardIndex(index);
  };

  const addToFavorites = async (id) => {
    await Wish.add_cart(id, 1, cookie.get("Auth")).then(e => { props.update_p() })


  };
  const removefromFavorites = async (id) => {
    await Wish.Delete_cart_item(id, 1, cookie.get("Auth")).then(e => { props.update_p() })


  };
  const getProducts = async () => {
    await product.searchpage(props.query).then((e) => {
      setProducts(e.response);
    });
  };

  const cookie = new Cookies()

  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {


    getProducts();
    props.update_p()
  }, []);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    navigate(`/SelectedProductPage/${product._id}`);
  };

 


  const filter = async () => {
    var filter = {};

    if (props.priceactive || props.coloractive || props.dateactive) {
      if (props.priceactive) {
        filter.prices = props.pricefilter;
      }

      if (props.coloractive) {
        filter.colors = props.colorfilter;
      }
      if (props.dateactive) {
        filter.creationDate = props.datefilter;
      }

      await product.searchpagefilter(props.query, filter).then((e) => {
        setProducts(e.response);
      });
    } else {
      getProducts();
    }
  };

  useEffect(() => {
    filter();
  }, [props.priceactive, props.coloractive, props.pricefilter, props.colorfilter, props.dateactive, props.datefilter]);
  const paragrapghstyle = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',

  }
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setshowReadMoreButton] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      setshowReadMoreButton(
        ref.current.scrollHeight !== ref.current.clientHeight

      )
    }
  }, [])
  return (
    <div className="containe d-flex mx-1">
      {products?.map((product, index) => (
        <div className="carda my-2 col-12 col-lg-3 mx-2  col-md-2"
          style={{
            border:
              selectedCardIndex === index
                ? "1px solid #d99d2b"
                : selectedwCardIndex === index
                  ? "1px solid red"
                  : "0.5px solid #C8D2D1"
          }}
          key={product._id}>
          <div
            onClick={() => handleImageClick(product)}
            className="carousel-wrapper"
            style={{ cursor: "pointer" }}
          >
             <div style={{position:"absolute",zIndex:"5" ,width:"100%" ,justifyContent:"end",display:"flex"}}>
            {product?.price_before !== product?.price_after ? (
    <>
      <div style={{ borderRadius: "50px", width: "fit-content", height: "fit-content" ,fontSize:"0.8rem"}} className=" bg-danger-subtle col-3 m-1  d-flex justify-content-center text-black">
                    <b className="my-3 mx-4" >{(((product?.price_before - product?.price_after) * 100) / product?.price_before).toFixed(1)}%</b></div>

               
    </>
  ) : (
    <>
     
    </>
  )} </div>
            <Carousel controls={false}>
              {product.imageSrc.map((image, index) => (
                <Carousel.Item key={index} interval={3000} >
                  <img
                    onClick={() => handleImageClick(product)}
                    className="d-block w-100"
                    src={image}
                    alt={""}
                    style={{
                      width: "100%",

                      height: "400px",
                    }}
                  />

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
            <div className=" d-flex flex-column align-items-start col-8 "
              onClick={() => handleImageClick(product)}
              style={{ cursor: "pointer", padding: "10px" }}
            >
              <Card.Title className="mb-0" style={isOpen ? null : paragrapghstyle} ref={ref}>{product.name}</Card.Title>
              {/* <Card.Text className="mb-0"> {product.price_before}$  <del className=" mx-2 text-danger">{product?.price_before}$ </del> </Card.Text> */}

              <Card.Text className="mb-0">
                {product.price_before !== product.price_after ? (
                  <>
                    {product.price_after}$ <del className="mx-2 text-danger">{product.price_before}$</del>
                  </>
                ) : (
                  <>
                    {product.price_after}$
                  </>
                )}
              </Card.Text>




            </div>

            <span
              className="  h-75 col-4 "
              style={{ textAlign: "center", " margin-top": "10%", paddingTop: "10px" }}
            >
              <div>
                <button
                  className="btn text-light   "
                  style={{ backgroundColor: "#d99d2b", marginLeft: "2px" }}
                  onClick={() => {
                    if (props.personal?.wish?.includes(product._id)) { removefromFavorites(product._id) }
                    else {
                      addToFavorites(product._id)
                    }
                    handlewButtonClick(index);
                  }}
                >
                  {props.personal?.wish?.includes(product._id) ?
                    <i className="bi bi-heart-fill  text-danger"></i>
                    :
                    <i className="bi bi-heart "></i>}
                </button>

                {/* <button
                  className="btn text-light  "
                  style={{ backgroundColor: "#d99d2b", marginLeft: "2px" }}
                  onClick={() => {
                    addtoBag(product._id)
                    handlewButtonClick(index);
                  }}
                >
                  {personal?.cart?.includes(product._id)?<i class="bi bi-check-square-fill "></i>:
                            <i class="bi bi-cart "></i>}
                </button> */}
                <button
                  className="btn text-light  "
                  style={{ backgroundColor: "#d99d2b", marginLeft: "2px" }}
                  onClick={() => {
                    handlewButtonClick(index);
                    handleImageClick(product)
                  }}
                ><i class="bi bi-eye "></i>
                </button>
              </div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
