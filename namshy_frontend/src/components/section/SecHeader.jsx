import React from "react";
import "./Section.css";
export default function SecHeader() {
  return (
    <div >
      <header
        className=" second "
        style={{ display: "flex",justifyContent: "space-between" }}
      >
        <div className="w-100 w-lg-auto" style={{
                width: "70%"}}>
          <div className=" d-flex  flex-wrap " style={{overflowY:"auto" }}>
            <a
              className="btn m-1 "
              style={{
                paddingLeft:"25px"
                ,paddingRight:"25px",
                width: "contain",
                 height: "100%" ,
                backgroundColor: "#f7f7f7",
                borderRadius: "26px",
                border: "1.5px solid #f7f7f7",
              }}
              href="#"
              role="button"
            >
              Premium
            </a>

            <a
              className="btn m-1"
              style={{
                paddingLeft:"25px"
                ,paddingRight:"25px",
                width: "contain", height: "100%" ,
                backgroundColor: "#f7f7f7",
                borderRadius: "26px",
                border: "1.5px solid #f7f7f7",
              }}
              href="#"
              role="button"
            >
              Sports
            </a>
            <a
              className="btn m-1 "
              style={{
                width: "contain", height: "100%" 
                ,paddingLeft:"25px"
                ,paddingRight:"25px",
                backgroundColor: "#f7f7f7",
                borderRadius: "26px",
                border: "1.5px solid #f7f7f7",
                
              }}
              href="#"
              role="button"
            >
              Streetwear
            </a>
            <a
              className="btn m-1"
              style={{
                paddingLeft:"25px"
                ,paddingRight:"25px",
                width: "contain", height: "100%" ,
                backgroundColor: "#f7f7f7",
                borderRadius: "26px",
                border: "1.5px solid #f7f7f7",
              }}
              href="#"
              role="button"
            >
              Fashion
            </a>
          </div>
          
        </div>
       
      </header>
    </div>
  );
}
