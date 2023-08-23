import React from "react";
import "./Popup.css";
import Demo from "./demo";

export default function PopUp({  login }) {
  return (
    <div className="popup">
      <div className="overlay"></div>
      <div className="popupContent">
        <Demo />
        <div  className="btnClose btn">
          <i
            class="fa-sharp fa-solid fa-xmark"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
      </div>
    </div>
  );
}