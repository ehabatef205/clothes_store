import React from "react";
import "./Section.css";
export default function FirstHeader() {
  let label = window.location.pathname.slice(1)
  label = label.toUpperCase().at(0) + label.slice(1)
  return (
    <div>
      <header
        className=" "
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className=" w-25">
          <div>
            <h3 style={{ display: "flex" }}>{label}</h3>
          </div>
          {/* <div>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a
                    href="#"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item">
                  <a
                    href="#"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    woman
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  clothings
                </li>
              </ol>
            </nav>
          </div> */}
        </div>
        <div
          className=" d-flex"
          style={{ width: "170px", justifyContent: "space-between" }}
        >
          <div
            className="bg-light p-3"
            style={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "50px",
              width: "50px",
              height: "50px",
              transform: "rotate(45deg)",
            }}
          >
            <i className="bi bi-paperclip"></i>
          </div>

          <div
            className="bg-light  p-3"
            style={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "50px",
              width: "50px",
              height: "50px",
            }}
          >
            <i class="bi bi-facebook "></i>
          </div>
          <div
            className="bg-light   p-3"
            style={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "50px",
              width: "50px",
              height: "50px",
            }}
          >
            <i className="bi bi-twitter "></i>
          </div>
        </div>
      </header>
    </div>
  );
}
