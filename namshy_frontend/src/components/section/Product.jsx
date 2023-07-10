import React,{useState} from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
function Product({product, index}) {
    const [selectedCardIndex, setSelectedCardIndex] = useState(1);
    const addToCart = () => {
        console.log("add to cart from " + index)
    }
    const addToFavorites = () => {
        console.log("add to favorites")
    }
  return (
    <div>
        <div
            className="card m-2"
            style={{
            border:
                selectedCardIndex === index
                ? "1px solid #58b368"
                : "0.5px solid #C8D2D1",
            width: "288px",
            height: "320px",
            }}
            // style={{ width: "18rem", height: "320px" ,}}
            key={index}
        >
            <Carousel controls={false} style={{ justifyContent: "center" }}>
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
                <Card.Text className="mb-0">Price: {product.price}</Card.Text>
            </div>
            <div>
                <button
                className="btn text-light   "
                style={{ backgroundColor: "#7DCEA0", marginRight: "2px" }}
                onClick={() => addToFavorites()}
                >
                <i className="bi bi-heart"></i>
                </button>

                <button
                className="btn text-light  "
                style={{ backgroundColor: "#7DCEA0" }}
                onClick={() => addToCart()}
                >
                <i class="bi bi-plus-lg"></i>
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Product