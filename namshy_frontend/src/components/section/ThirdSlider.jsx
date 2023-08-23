import React, { useContext, useState, useEffect, useRef } from 'react';
import Card from "react-bootstrap/Card";
import * as sub_cat from "../../api/subcategory";
import Container from "react-bootstrap/Container";
import { CartContext } from './Shoppingcartcontext'
import { CardsSlider } from "../../components/section/CardsSlider";
import { useNavigate } from "react-router-dom";
import * as product from '../../api/product'
import Carousel from "react-bootstrap/Carousel";

export default function ThirdSlider({ id }) {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const [category, setCategory] = React.useState({});
  const [products, setProducts] = React.useState([]);

  const getCategory = async () => {
    console.log(id)
    await product.get_product_by_category(id).then((e) => {
      console.log(e.response)
      setProducts(e.response.splice(0, 3))
    });
  };
  useEffect(() => {

    getCategory();
  }, [id]);

  const [coloractive, setcoloractive] = useState(false)
  const [priceactive, setpriceactive] = useState(false)
  const [dateactive, setdateactive] = useState(false)
  const [colorfilter, setColorFilter] = useState([])
  const [datefilter, setdatefilter] = useState("")
  const handleColorChange = (color) => {
    console.log(color)
    if (colorfilter.includes(color)) {
      setColorFilter(colorfilter.filter(c => c !== color));
    } else {
      setColorFilter([...colorfilter, color]);
    }
  };

  const [pricefilter, setpricefilter] = useState([])

  return (
    <Container
      className="  d-flex justify-content-center "
      style={{ boxSizing: "border-box" }}
    >
      <div className=" w-100 sec  ">
        <div id={id} className="carousel slide w-100" data-bs-ride="carousel">
          <div className=" cards w-100 ">
            {products.map((pro, index) => (
              <div className="carda my-2 col-12 col-lg-3 mx-2  col-md-2" style={{ display: "inline-block" }}
                key={pro._id}>
                <div
                  onClick={() => { }}
                  className="carousel-wrapper"
                  style={{ cursor: "pointer" }}

                >
                  <Carousel controls={false}
                    interval={3000} >
                    {pro?.imageSrc.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img
                          onClick={() => { }}
                          className="d-block w-100"
                          src={image}
                          alt={""}
                          style={{
                            width: "100%",
                            // height: "250px",
                            height: "400px",

                          }}
                        />

                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                <div

                  className="card-body d-flex "
                  style={{
                    fontSize: "100%",
                    padding: "0px",
                    flexDirection: "flex-row",
                    justifyContent: "space-between",

                  }}
                >
                  <div className=" d-flex flex-column align-items-start  col-8 "
                    onClick={() => { }}
                    style={{ cursor: "pointer", padding: "10px" }}
                  >
                    <Card.Title className="mb-0" style={{}} >{pro.name}</Card.Title>
                    <Card.Text className="mb-0">
                      {pro.price_before !== pro.price_after ? (
                        <>
                          {pro.price_after}$ <del className="mx-2 text-danger">{pro.price_before}$</del>
                        </>
                      ) : (
                        <>
                          {pro.price_after}$
                        </>
                      )}
                    </Card.Text>
                    {/* <Card.Text  style={ isOpen? null: paragrapghstyle} ref={ref}> {pro.desc.descreption}</Card.Text> */}
                  </div>
                  <span
                    className="  h-75  col-4 "
                    style={{ textAlign: "center", " margin-top": "10%", paddingTop: "10px" }}
                  >
                    <div>
                      <button
                        className="btn text-light   "
                        style={{ backgroundColor: "#d99d2b", marginLeft: "2px" }}
                        onClick={() => { }}
                      >
                        {
                          <i className="bi bi-heart "></i>}
                      </button>

                      {/* <button
                        className="btn text-light  "
                        style={{ backgroundColor: "#d99d2b", marginLeft: "2px" }}
                        onClick={() => {
                          addtoBag(pro._id)
                          handlewButtonClick(index);
                        }}
                      >
                        {personal?.cart?.includes(pro._id)?<i class="bi bi-check-square-fill "></i>:
                                  <i class="bi bi-cart "></i>}
                      </button> */}
                      <button
                        className="btn text-light  "
                        style={{ backgroundColor: "#d99d2b", marginLeft: "2px" }}
                        onClick={() => {
                        }}
                      ><i class="bi bi-eye "></i>
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
