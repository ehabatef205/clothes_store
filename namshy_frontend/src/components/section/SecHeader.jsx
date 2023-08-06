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
          <div className=" d-flex  flex-wrap " style={{"overflow-y":"auto" }}>
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
        <div className="d-flex d-none d-lg-block" style={{ width: "20%", height: "100%" ,}}>
          <select class="form-select" aria-label="Dropdown">
            <option selected>Suggested</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option3">Option 4</option>
            <option value="option3">Option 5</option>
          </select>
        </div>
      </header>
    </div>
  );
}
