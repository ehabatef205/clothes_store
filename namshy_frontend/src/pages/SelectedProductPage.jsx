import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Rating } from "@mui/material";
import ThirdSlider from "../components/section/ThirdSlider";
import * as Product from '../api/product'
function SelectedProductPage({ products, handleClick }) {
  const [childHeight, setChildHeight] = useState(0);
  const [selected, setSelected] = useState({});
  const size = ["m", "l", "xl", "xxl"]

  const { id } = useParams();
  useEffect(() => {
    console.log('here')
    const getById = async () => {
      console.log('here')
      await Product.get_product_by_id(id).then((e) => {
        setSelected(e.response)
      })
    } 
    getById()

    const child1 = document.getElementById("child1");
    const child1Height = child1.offsetHeight;
    setChildHeight(child1Height);
  }, []);


  const [value, setValue] = useState(0);

  console.log(id);

  return (
    <div
      className="viewcontainer justify-content-center   "
      style={{ position: "relative", top: "70px" }}
    >
      <div className=" m-3 " style={{ textAlign: "center" }}>
        {" "}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li class="breadcrumb-item">
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                woman
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              clothings
            </li>
          </ol>
        </nav>
      </div>
      <Container id="parent" className=" justify-content-center">
        <Row className=" " style={{ height: childHeight }}>
          <Col
            id="child1"
            className="d-flex flex-wrap col-lg-6 "
            style={{ width: "630px", padding: "0px" }}
          >
              
            {selected?.imageSrc?.map((image, index) => (
              <img
                key={index}
                style={{ width: "307px", height: "433px" }}
                className="d-block mx-1 my-1 "
                src={image}
                alt={""}
              />
            ))}
          </Col>
          <Col
            id="child2"
            className=" d-flex flex-wrap col-lg-6"
            style={{
              width: "650px",
              overflow: "auto",
              boxSizing: "content-box",
              height: childHeight,
            }}
          >
            <div className=" d-flex flex-wrap  ">
              <Row
                className=" d-flex flex-wrap  w-100 mx-1 "
                style={{ width: "625px" }}
              >
                <div className=" w-100  d-flex justify-content-between  my-1">
                  <div className=" my-1  w-50 ">
                    <p style={{ textAlign: "left" }}>{selected?.name}</p>
                  </div>
                  <div className=" my-1 mx-2 " style={{}}>
                    {" "}
                    <a className="text-success">follow brand</a>{" "}
                    <i className="bi bi-share mx-1"></i>{" "}
                  </div>
                </div>
                <div className=" my-1 w-100">
                  <p style={{ textAlign: "left", fontSize: "25px" }}>
                    {selected?.name}
                  </p>
                </div>
                {/* <div className=" w-100" >   </div> */}

                <div
                  className=" w-100 my-1 d-flex "
                  style={{ fontSize: "18px" }}
                >
                  {" "}
                  <s className="text-secondary mx-2">{selected?.price}</s>
                </div>
              </Row>
              {/*  */}
              <Row
                className=" d-flex flex-wrap  w-100 mx-1  "
                style={{ width: "625px", height: "170px" }}
              >
                <div
                  className="d-flex justify-content-between "
                  style={{ height: "40px" }}
                >
                  <div>
                    <b style={{ fontSize: "25px" }}>size</b>
                  </div>
                  <div style={{ fontSize: "15px" }} className="text-success">
                    show size chart
                  </div>
                </div>
                <div className=" w-100   my-1">
                  <div style={{ textAlign: "left" }}>
                    <button
                      style={{
                        cursor: "pointer",
                        borderRadius: "2px",
                        fontSize: "17px",
                      }}
                      className="btn text-success bg-light  mx-1 my-2"
                    >
                      international{" "}
                    </button>
                    <button
                      style={{
                        cursor: "pointer",
                        borderRadius: "2px",
                        fontSize: "17px",
                      }}
                      className="btn text-success bg-light  mx-1 my-2"
                    >
                      US{" "}
                    </button>
                    <button
                      style={{
                        cursor: "pointer",
                        borderRadius: "2px",
                        fontSize: "17px",
                      }}
                      className="btn text-success bg-light  mx-1 my-2"
                    >
                      {" "}
                      UK
                    </button>
                    <button
                      style={{
                        cursor: "pointer",
                        borderRadius: "2px",
                        fontSize: "17px",
                      }}
                      className="btn text-success bg-light  mx-1 my-2"
                    >
                      EU{" "}
                    </button>
                  </div>
                  <div
                    className=" my-1  justify-content-start "
                    style={{ textAlign: "left" }}
                  >
                    {" "}
                    {size.map((size, index) => (
                      <button
                        style={{
                          zIndex: 3,
                          cursor: "pointer",
                          width: "70px",
                          borderRadius: "2px",
                        }}
                        key={index}
                        className="btn  btn-outline-secondary mx-1"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                {/* <div className=" my-1 w-100" >productname</div> 
    <div className="w-100 my-1" >prise/ old</div> */}
              </Row>
              {/*  */}
              <Row
                className=" d-flex flex-wrap w-100 w-100 mx-1 "
                style={{ height: "200px" }}
              >
                <div className=" my-1 w-50  d-md-grid ">
                  <span className=" my-2 h-50 " style={{ textAlign: "center" }}>
                    <button
                      className="btn text-light my-3 h-100 w-100"
                      onClick={() => handleClick(products)}
                      style={{ backgroundColor: "#7DCEA0" }}
                    >
                      Add To Bag
                    </button>
                  </span>
                  <span className="" style={{ height: "100px" }}>
                    <img
                      src="https://a.namshicdn.com/web-desktop/04712760e51a72afe9cc.svg"
                      alt=""
                    />
                    <div>100% Genuine</div>
                  </span>{" "}
                </div>

                <div className=" my-1 w-50 d-md-grid ">
                  <span className=" my-2 h-50 " style={{ textAlign: "center" }}>
                    <button className="btn bg-light my-3  text-success h-100 w-100">
                      Add to wish list{" "}
                    </button>
                  </span>
                  <span className="" style={{ height: "100px" }}>
                    <img
                      src=" https://a.namshicdn.com/web-desktop/2be1a1eca215dfed8e18.svg "
                      alt=""
                    />
                    <div>Free Shipping</div>
                  </span>{" "}
                </div>
              </Row>
              {/**/}
              <Row
                className=" d-flex flex-wrap mx-1 "
                style={{ width: "620px", borderBottom: " 1px solid gray" }}
              >
                <div
                  style={{ borderBottom: " 1px solid gray", textAlign: "left" }}
                >
                  Description
                </div>
                <div className="my-2">{selected?.desc}</div>
              </Row>
              {/*  */}
              <Row
                className=" d-flex flex-wrap mx-1  "
                style={{ width: "620px" }}
              >
                <div
                  className="my-4"
                  style={{
                    borderBottom: " 1px solid gray ",
                    textAlign: "left",
                  }}
                >
                  Info & Care
                </div>
                <div className="d-flex my-2">
                  <div style={{ textAlign: "left" }}>
                    {" "}
                    SKU
                    <br />
                    Color
                    <br /> Neack Type
                    <br /> size shown in image
                    <br />
                    supplier style No
                    <br />
                    washing instructions
                    <br /> product material
                  </div>

                  
                </div>
              </Row>
              {/*  */}
              <Row
                className=" d-flex flex-wrap mx-1  "
                style={{ width: "620px" }}
              >
                <div className="d-flex w-25 ">
                  <a
                    class="brand-link follow-brand__logo"
                    href="/adidas_originals/"
                    data-brand-name="adidas Originals"
                    data-brand-url="/adidas_originals/"
                  >
                    <img
                      src="https://a.namshicdn.com/brand/adidas_originals.jpg"
                      data-nm-invalid-image-remover=""
                    />
                  </a>
                </div>
                <div className=" w-75">
                  <div className=" m-3 w-75" style={{ textAlign: "left" }}>
                    {selected?.brand}
                  </div>
                  <div className="d-flex  w-75">
                    <a className=" w-50" href="" style={{ color: "#7DCEA0" }}>
                      Follow Brand
                    </a>
                    <div className="  text-secondary">|</div>
                    <a className="w-50" style={{ color: "#7DCEA0" }} href="">
                      See All Products
                    </a>
                  </div>
                </div>
                <div>
                  Follow this brand to stay updated on exciting launches, new
                  collections & more!
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="justify-content-center" style={{ width: "1305px" }}>
        <section
          className=" d-flex justify-content-between  my-5 mx-4"
          style={{
            height: "80px",
            width: "1200px",
            padding: "10px",
            border: "1px solid gray",
          }}
        >
          <div className="w-25 mx-4">
            <p className="m-1">Do you own or have used the product?</p>
            <p>Tell your opinion by assigning a rating</p>
          </div>
          <div className="w-25">
            <Rating
              className="m-4"
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="w-25">
            {" "}
            <span className="btn my-3 btn-outline-success w-75">
              Rate this product{" "}
            </span>
          </div>
        </section>

        <section className=" my-5 h-25   " style={{ width: "1300px" }}>
          <div className=" w-100 my-3  " style={{ textAlign: "left" }}>
            <p>Frequently Bought Together</p>
          </div>
          <div>
            <ThirdSlider id="first"></ThirdSlider>
          </div>
        </section>

        <section className=" my-5 h-25 " style={{ width: "1300px" }}>
          <div className=" w-100 my-3  " style={{ textAlign: "left" }}>
            <p>Similar Products</p>
          </div>
          <div>
            <ThirdSlider id="second"></ThirdSlider>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default SelectedProductPage;
