import React from "react";

import { tops, bottoms } from "./data";
import { Container } from "react-bootstrap";
function Demo() {
  return (
    <Container
      className="  d-flex flex-row justify-content-center  "
      style={{ height: "600px" }}
    >
      <div
        className="col-lg-6 col-md-6 col-12"
        style={{ height: "600px", width: "600px " }}
      >
        
        <img
          src="https://media.revery.ai/generated_model_image/1542389041;symbol_186303-symbol_188928;16763604733868222.png"
          alt="model"
          className="w-100 h-100  "
        />
      </div>
      <div
        className="col-lg-6 col-md-6 col-12 d-flex flex-wrap justify-content-center "
        style={{
          height: "fit-content",
          width: "600px ",
          border: " 0.5px solid gray",
        }}
      >
        <div className="col-2  " style={{ borderRight: " 0.5px solid gray" }}>
          <div
            className=" bg-dark my-3 mx-3 d-flex justify-content-center "
            style={{
              borderRadius: "50%",
              width: "70px",
              height: "70px",
              cursor: "pointer",
               position:"relative",
                top:"100px" 
            }}
          >
            <img
              src="https://revery-integration-tools.s3.us-east-2.amazonaws.com/images/tops.svg"
              role="botton"
              alt="tops"
              className="w-75 my-2 h-75"
            />
          </div>

          <div
            className=" bg-dark my-3 mx-3 d-flex justify-content-center  "
            style={{
                position:"relative",
                top:"250px",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
              cursor: "pointer",
            }}
          >
            <img
              src="https://revery-integration-tools.s3.us-east-2.amazonaws.com/images/bottoms.svg"
              role="botton"
              alt="bottoms"
              className="w-75 my-2 h-75"
            />
          </div>

       
        </div>
        <div className="col-10  ">
          <div
            className="w-100 "
            style={{ height: "fit-content", borderBottom: " 0.5px solid gray" }}
          >
            <button className="btn bg-light b-1 w-25 my-2 mx-3">f</button>
            <button className="btn bg-light b-1 w-25 my-2 mx-3">m</button>
          </div>
          <div
            className="w-100 d-flex flex-wrap "
            style={{ height: "fit-content" }}
          >
            <div className="d-flex  " style={{overflow:"scroll" ,width:"550px",height:"fit-content"}}>
            {tops.map((top) => (
              <div
                className=" mx-2 my-3 "
                style={{ height: "200px", width: "150px" }}
              >
                <img
                  key={top.id}
                  src={top.imageurl}
                  alt={top.name}
                  style={{ height: "150px", width: "150px" }}
                />
                <p  style={{ height: "50px" }}>  {top.name} </p>
              </div>
            ))}
            </div>

            <div className="d-flex  " style={{overflow:"scroll" ,width:"550px",height:"fit-content"}}>
            {bottoms.map((bottom) => (
              <div
                className=" mx-2 my-3 "
                style={{ height: "200px", width: "150px" }}
              >
                <img
                  key={bottom.id}
                  src={bottom.imageurl}
                  alt={bottom.name}
                  style={{ height: "150px", width: "150px" }}
                />

               <p  style={{ height: "50px" }}>  {bottom.name} </p>
              </div>
            ))}
          </div>
          </div>
         
        </div>
        <div  className="w-100 my-3 ">
            <button className="btn btn-outline-danger w-75"> apply</button> </div>
      </div>
    </Container>
  );
}

export default Demo;