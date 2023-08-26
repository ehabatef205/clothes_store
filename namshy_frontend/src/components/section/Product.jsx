
import React, { useState, useContext, useEffect ,useRef} from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import "./homecard.css";
import { useNavigate } from "react-router-dom";

import * as Wish from "../../api/wish";
import { Cookies } from "react-cookie";


export function Product({ product, index ,personal,update_p}) {
   
    
    const [selectedProduct, setSelectedProduct] = useState(null);
   
    const navigate = useNavigate();
    const [selectedCardIndex, setSelectedCardIndex] = useState(1);
    const [selectedwCardIndex, setSelectedwCardIndex] = useState(1);
    const handleButtonClick = (index) => {
        setSelectedCardIndex(index);
    };
    const handlewButtonClick = (index) => {
        setSelectedwCardIndex(index);
    };

    const cookie = new Cookies();

    const handleImageClick = (product) => {
        setSelectedProduct(product);
        window.scrollTo(0,0)
        navigate(`/SelectedProductPage/${product._id}`);
    };


    const addToFavorites = async (id) => {
        const token=cookie.get('Auth')
        if(token===undefined){
            navigate('/login')
        }else{
        await Wish.add_cart(id, 1, cookie.get("Auth")).then((e) => {
            update_p()
        });}
    };

    //   console.log("card",product)
    const paragrapghstyle={
        WebkitLineClamp:1,
        WebkitBoxOrient:'vertical',
        overflow:'hidden',
        display:'-webkit-box',
        
      }
      const [isOpen,setIsOpen]=useState(false);
      const [showReadMoreButton , setshowReadMoreButton ]=useState(false)
      const ref=useRef(null)
      useEffect (()=>{
        if(ref.current){
          setshowReadMoreButton (
            ref.current.scrollHeight !== ref.current.clientHeight
      
          )
        }
      },[])
    return (
        <div>
            <div
                className="card m-2 carousel-wrapper"
                key={index}
                style={{
                    border:
                        selectedCardIndex === index
                            ? "1px solid #d99d2b"
                            : selectedwCardIndex === index
                                ? "1px solid red"
                                : "0.5px solid #C8D2D1",
                    width: "288px",
                    height: "320px",
                }}
            >
                <Carousel
                    controls={false}
                    style={{ justifyContent: "center" }}
                    onClick={() => {
                        handleImageClick(product);
                    }}
                >
                    {product.imageSrc.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block  "
                                style={{
                                    width: "90%",
                                    height: "250px",
                                    margin: "auto",
                                    borderRadius: "10px",
                                }}
                                src={image}
                                alt={""}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div
                    className="card-body my-2 d-flex   justify-content-between "
                    style={{ fontSize: "15px", paddingTop: "2px",paddingBottom: "2px",paddingLeft:"5px",paddingRight:"5px" }}
                >
                    <div className="d-flex flex-column align-items-start col-7 ">
                        <Card.Title className="mb-0" style={ isOpen? null: paragrapghstyle} ref={ref}>{product.name}</Card.Title>
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
              className="col-5"
              style={{ textAlign: "center", " margin-top": "10%" ,paddingTop:"10px"}}
            >
                    <div className="justify-content-around d-flex" >
                        <button
                            className="btn text-light   "
                            style={{ backgroundColor:  "#d99d2b",color:"red" }}
                            onClick={() => {
                                addToFavorites(product._id);
                                handlewButtonClick(index);
                            }}
                        >{personal?.wish?.includes(product._id)?
                        <i className="bi bi-heart-fill fs-5 text-danger"></i>
                        :
                            <i className="bi bi-heart fs-5"></i>}
                        </button>

                         <button
                            className="btn text-light  "
                            style={{ backgroundColor: "#d99d2b" }}
                            onClick={() => {
                                handleImageClick(product)
                            }}
                        >  
                            <i class="bi bi-eye fs-5"></i>
                        </button>
                    </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Product;