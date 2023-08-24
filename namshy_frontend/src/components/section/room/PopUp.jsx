import React from "react";
import "./Popup.css";
import Demo from "./demo";

export default function PopUp(props) {

  const handleClose = () => {
    props.setVRactive(false);
  };
  return (
    <div className={`popup ${props.VRactive ? "open" : ""}`}>
      {props.VRactive && <div className="overlay" onClick={handleClose}></div>}
      {props.VRactive && (
        <div className="popupContent">
          <Demo products={props.products} />
          <div className="btnClose btn" onClick={handleClose}>
            <i className="fa-sharp fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
          </div>
        </div>
      )}
    </div>
  );
}