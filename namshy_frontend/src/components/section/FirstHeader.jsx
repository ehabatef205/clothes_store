import React from "react";
import "./Section.css";
export default function FirstHeader({sub}) {
  let label = window.location.pathname.slice(1)
  label = label.toUpperCase().at(0) + label.slice(1)
  return (
    <div>
      <header
        className="d-flex flex-wrap "
        style={{ justifyContent: "space-between",direction:"rtl" }}
      >
        <div className=" "style={{ width:"contain" }}>
          <div className="w-100 ">
            <h3 style={{ display: "flex" }}>{sub?.name}</h3>
          </div>
          {/* <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a
                    href="#"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a
                    href="#"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    woman
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  clothings
                </li>
              </ol>
            </nav>
          </div> */}
        </div>
        <div
          className=" d-flex  " 
          style={{ width: "contain", justifyContent: "space-between" }}
        >
          <div
            className="bg-light p-3 mx-4"
            style={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "50px",
              width: "50px",
              height: "50px",
              transform: "rotate(45deg)",
            }}
          >
            <a style={{cursor:"pointer"}} href="https://google.com"
            className="bi bi-paperclip"></a>
          </div>

          <div
            className="bg-light mx-2 p-3"
            style={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "50px",
              width: "50px",
              height: "50px",
            }}
          >
            <a className="bi bi-facebook " 
            href="https://facebook.com"
            style={{cursor:"pointer"}}></a>
          </div>
          <div
            className="bg-light  mx-4 p-3"
            style={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "50px",
              width: "50px",
              height: "50px",
            }}
          >
            <a  href="https://twitter.com"
            style={{cursor:"pointer"}} className="bi bi-twitter "></a>
          </div>
        </div>
      </header>
    </div>
  );
}
