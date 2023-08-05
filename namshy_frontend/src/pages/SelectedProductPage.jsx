import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Rating } from "@mui/material";
import Header from "../components/Navs/Header";
import ThirdSlider from "../components/section/ThirdSlider";
import * as Product from '../api/product'
import * as Cart from '../api/cart'
import * as Wish from '../api/wish'
import { Cookies } from 'react-cookie'

function SelectedProductPage({ products, handleClick }) {
  const [childHeight, setChildHeight] = useState(0);
  const [selected, setSelected] = useState({});
  const size = ["m", "l", "xl", "xxl"]
  const [Sizet, setSizet] = useState('m');
  const cookie = new Cookies()

  const { id } = useParams();
  useEffect(() => {
    const getById = async () => {
      await Product.get_product_by_id(id).then((e) => {
        setSelected(e)
      })
    }
    getById()

    const child1 = document.getElementById("child1");
    const child1Height = child1.offsetHeight;
    setChildHeight(child1Height);
  }, []);


  const [value, setValue] = useState(0);

  const addtoBag = async () => {
    await Cart.add_cart(id, 1, cookie.get("Auth")).then((e) => {
      console.log(e)
    })
  }
  const addtowish = async () => {
    await Wish.add_cart(id, 1, cookie.get("Auth")).then((e) => {
      console.log(e)
    })
  }

  return (
    <div>
      <Header visible={false} ></Header>
      <div
        className="viewcontainer justify-content-center   "
        style={{ position: "relative", top: "70px" }}
      >
      </div>

      <div className=" m-3" style={{ textAlign: "center" }}>
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
      <Container id="parent" className="d-flex flex-wrap" style={{ width: "100%" }}>

        <div className="flex-wrap" style={{ display: "flex", "flex-direction ": "row", width: "100%", flexDirection: "row" }}>
          <div
            id="child1"
            className="d-flex flex-wrap col-lg-6 col-sm-12  "
            style={{ padding: "0px", justifyContent: "space-between" }}
          >

            {selected?.imageSrc?.map((image, index) => (
              <img
                key={index}
                style={{ width: "50%", height: "50%" }}
                className="d-block   "
                src={image}
                alt={""}
              />
            ))}
          </div>
          <div
            id="child2"
            className=" d-flex flex-wrap col-lg-6 col-sm-12 "
            style={{

              padding: "15px"
            }}
          >
            <div className=" d-flex flex-wrap  ">
              <div
                className=" d-flex flex-wrap   w-100  "
              >
                <div className="   d-flex justify-content-between w-100 ">
                  <div>
                    <p >{selected?.name}</p>
                  </div>
                  <div style={{ "margin-left": "auto" }} >
                    {" "}
                    <a className="text-dark">follow brand</a>{" "}
                    <i className="bi bi-share "></i>{" "}
                  </div>
                </div>
                <div className="  w-100">
                  <p style={{ textAlign: "left", fontSize: "25px" }}>
                    {selected?.name}
                  </p>
                </div>
                {/* <div className=" w-100" >   </div> */}

                <div
                  className=" w-100  d-flex "
                  style={{ fontSize: "18px" }}
                >
                  {" "}
                  <div className=" mx-2">{selected?.price_after} </div>
                </div>
              </div>
              {/*  */}
              <div
                className=" d-flex flex-wrap  w-100   "
                style={{ width: "100%", height: "170px" }}
              >
                <div
                  className="d-flex justify-content-between w-100"
                  style={{ height: "40px" }}
                >
                  <div>
                    <b style={{ fontSize: "25px" }}>size</b>
                  </div>
                  <div style={{ fontSize: "15px" }} className="text-dark">
                    show size chart
                  </div>
                </div>
                <div className=" w-100   ">
                  <div style={{ textAlign: "left" }}>
                    <button
                      style={{
                        cursor: "pointer",
                        borderRadius: "2px",
                        fontSize: "17px",
                      }}
                      className="btn text-dark bg-light   my-2"
                    >
                      international
                    </button>
                    <button
                      style={{
                        cursor: "pointer",
                        borderRadius: "2px",
                        fontSize: "17px",
                      }}
                      className="btn text-dark bg-light   my-2"
                    >
                      US
                    </button>
                    <button
                      style={{
                        cursor: "pointer",
                        borderRadius: "2px",
                        fontSize: "17px",
                      }}
                      className="btn text-dark bg-light   my-2"
                    >

                      UK
                    </button>
                    <button
                      style={{
                        cursor: "pointer",
                        borderRadius: "2px",
                        fontSize: "17px",
                      }}
                      className="btn text-dark bg-light   my-2"
                    >
                      EU{" "}
                    </button>
                  </div>
                  <div
                    className="   justify-content-start "
                    style={{ textAlign: "left" }}
                  >
                    {" "}
                    {size.map((size, index) => (
                      <button
                      onClick={() =>{setSizet(size)}}
                        style={{
                          zIndex: 3,
                          cursor: "pointer",
                          width: "70px",
                          borderRadius: "2px",
                          backgroundColor:size===Sizet? 
                          "gray":"transparent",
                          color:size===Sizet? 
                          'white':"gray",
                        }}
                        key={index}
                        className="btn  btn-outline-secondary "
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                {/* <div className="  w-100" >productname</div> 
    <div className="w-100 " >prise/ old</div> */}
              </div>
              {/*  */}
              <div
                className=" d-flex  w-100   "
                style={{ "flex-direction": "flex-row" }}

              >
                <div className=" d-flex w-100  "
                  style={{ flexDirection: "flex-row" }}
                >
                  <span className=" mx-3" style={{ textAlign: "center", width: "45%" }}>
                    <button
                      className="btn text-light my-3 h-75 w-100"
                      onClick={() => addtoBag()}
                      style={{ backgroundColor: "#d99d2b", fontSize: "1.2rem" }}
                    >
                      Add To Bag
                    </button>
                  </span>


                  <span style={{ textAlign: "center", width: "45%", fontSize: "1.2rem" }}>
                    <button 
                    onClick={() => addtowish()}
                    className="btn bg-light my-3  text-dark h-75 w-100">
                      Add to wish list{" "}
                    </button>
                  </span>

                </div>
              </div>
              <div className=" d-flex w-75  justify-content-around my-4 " style={{ marginLeft: "75px", gap: "15%" }}
              >
                <span className="" style={{ height: "100%" }}>
                  <img

                    src=" https://a.namshicdn.com/web-desktop/2be1a1eca215dfed8e18.svg "
                    alt=""
                  />
                  <div>Free Shipping</div>
                </span>
                <span className="" style={{ height: "100px" }}>
                  <img
                    src="https://a.namshicdn.com/web-desktop/04712760e51a72afe9cc.svg"
                    alt=""
                  />
                  <div>100% Genuine</div>
                </span>
              </div>
              {/**/}
              <div
                className=" d-flex flex-wrap  "
                style={{ width: "100%", borderBottom: " 1px solid gray" }}
              >
                <div
                  style={{ borderBottom: " 1px solid gray", textAlign: "left" }}
                >
                  Description : {selected?.desc?.description}
                </div>
              </div>

              <div
                className=" d-flex flex-wrap   "
                style={{ width: "100%", height: "fit-content", borderBottom: " 1px solid gray ", }}
              >
                <div
                  className="my-4"
                  style={{

                    textAlign: "left",
                  }}
                >
                  Info & Care :
                </div>
                <div className="d-flex">
                  <div style={{ textAlign: "left", marginTop: "24px", marginLeft: "5px" }}>
                    {" "}
                    SKU {selected?.SKU}
  
                    <br /> 
                    product material : {selected?.desc?.type}
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                className=" d-flex flex-wrap   "
                style={{ width: "100%" }}
              >
                <div className="d-flex w-25 ">
                  <a
                    className="brand-link follow-brand__logo"
                    href="/adidas_originals/"
                    data-brand-name="adidas Originals"
                    data-brand-url="/adidas_originals/"
                  >
                    <img
                      src={selected?.desc?.brand?.logo}
                      data-nm-invalid-image-remover=""
                    />
                  </a>
                </div>
                <div className=" w-75">
                  <div className=" m-3 w-75" style={{ textAlign: "left" }}>
                    {selected?.desc?.brand?.name}
                  </div>

                </div>
                <div>
                  Follow this brand to stay updated on exciting launches, new
                  collections & more!
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="justify-content-center " style={{ width: "100%" }}>
        <section
          className=" d-flex flex-wrap justify-content-between  my-5 "
          style={{

            width: "100%",
            padding: "10px",
            border: "1px solid gray",
          }}
        >
          <div className="col-lg-4 col-7  ">
            <p className="m-1 mx-3">Do you own or have used the product?</p>
            <p className="m-1 mx-3">Tell your opinion by assigning a rating</p>
          </div>
          <div className=" col-lg-4  col-5 d-flex justify-content-around">
            <Rating
              className="m-4"
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className=" col-lg-4 col-12 d-flex justify-content-around ">

            <span className="btn my-3 btn-outline-warning w-50 ">
              Rate this product{" "}
            </span>
          </div>
        </section>

        <section className=" my-5 h-25   " style={{ width: "100%" }}>
          <div className=" w-100 my-3  " style={{ textAlign: "left" }}>
            <p>Frequently Bought Together</p>
          </div>
          <div>
            <ThirdSlider id="first"></ThirdSlider>
          </div>
        </section>

        <section className=" my-5 h-25 " style={{ width: "100%" }}>
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
