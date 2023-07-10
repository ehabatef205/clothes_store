import React from "react";
import ThirdSlider from "../components/section/ThirdSlider";
import { Container } from "react-bootstrap";
import Header from "../components/Navs/Header";


export default function Bag() {
  return (
    <><div>          <Header></Header>
    </div><><Container style={{ position: "relative", top: "70px" }}>
      <div>
        <div className="d-flex justify-content-between">
          <button
            className="btn text-light "
            style={{ backgroundColor: "#7DCEA0" }}
          >
            AI Virtual Room
          </button>
          <button
            className="btn "
            style={{ color: "#7DCEA0", border: "1px solid gray" }}
          >
            Back
          </button>
        </div>

        <div className="d-flex m-3 ">
          <div
            style={{ textAlign: "end" }}
            className="col-4 d-flex-column justify-content-between  "
          >
            <div className="one">
              <p>Order Summary</p>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ border: "1px solid gray " }}
            >
              <div className="d-flex">
                <div className=" w-25 d-flex justify-content-center">
                  <i class="bi bi-percent m-2"></i>
                </div>

                <div style={{ width: "250px", textAlign: "start" }}>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    See Available Coupons
                  </p>
                  <p style={{ fontSize: ".8rem" }}>See Available Coupons</p>
                </div>
              </div>
              <div className=" w-25 d-flex">
                {" "}
                <i className="bi bi-chevron-compact-right m-3"></i>{" "}
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <div>SUBTOTAL</div>
                <div>product price</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>SHIPPING</div>
                <div>50 $</div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <span className="mx-2" style={{ fontSize: "1.3rem" }}>
                      Total
                    </span>
                  </p>
                </div>
                <div>
                  <p className="mx-2" style={{ fontSize: "1.2rem" }}>
                    totat cost
                  </p>
                </div>
              </div>
              <div>
                <p style={{ fontSize: "1rem", padding: "0px", margin: "0px" }}>
                  Excluding import taxes (VAT) and customs' duties
                </p>
                <p style={{ fontSize: "1rem", padding: "0px", margin: "0px" }}>
                  You will be charged in USD
                </p>
                <p style={{ fontSize: "1rem", padding: "0px", margin: "0px" }}>
                  Zero Shipping fee for order sizes of 300 USD or more
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="tow col-8 my-3  mx-5"
              style={{ width: "770px", marginRight: "0px" }}
            >
              <div className="  d-flex justify-content-between">
                <div style={{ textAlign: "center" }}>
                  <div className="h-50 ">
                    <span style={{ textAlign: "center" }}>producprice</span>
                  </div>
                  <div className="h-50 " style={{ textAlign: "center" }}>
                    <button className="btn m-1 btn-light"><i class="bi bi-plus-lg"></i></button>
                    <span className="m-1">num</span>
                    <button className=" btn m-1 btn-light"><i class="bi bi-dash-lg"></i></button>
                  </div>
                </div>
                <div className="d-flex " style={{ textAlign: "end" }}>
                  <div>
                    <div className="m-3">
                      <p style={{ margin: "0px", padding: "0px" }}>brand</p>
                      <p style={{ margin: "0px", padding: "0px" }}>
                        prouduct name
                      </p>
                      <p>size</p>
                    </div>

                    <div className="d-flex">
                      <div className="m-2 ">
                        <i class="bi bi-trash3">delete</i>
                      </div>
                      <div className=" m-2 text-secondary">|</div>
                      <div className="m-2 ">
                        <i className="bi bi-heart m-2">save later</i>
                      </div>
                    </div>
                  </div>
                  <div className="bg-dark m-2">
                    <img
                      style={{ width: "90px", height: "130px" }}
                      src="https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <button
            className="btn text-light "
            style={{ backgroundColor: "#7DCEA0" }}
          >
            Process to Chekout
          </button>
        </div>
      </div>
      <section className=" my-5 h-25 " style={{ width: "1300px" }}>
        <div className=" w-100 my-3  " style={{ textAlign: "left" }}>
          <h2>Similar Product </h2>
        </div>
        <div>
          <ThirdSlider id="second"></ThirdSlider>
        </div>
      </section>
    </Container></></>
  );
}
