import React from "react";
import Box from "./box.svg"
import "./styles/orders.css";

const Orders = () => {
    return(
  <div>
    <div class="head">
      <div class="headtext">My orders</div>
    </div>
    <br />
    <div class="error-card">
      <div class="error-card__title">You have no orders to be displayed</div>
      <div class="error-card__text">
        <p>you shall see your orders upon the first purchases</p>
      </div>
      <div class="error-card__image">
        <img src={Box} alt="No order history" />
      </div>
    </div>
  </div>
    )
};
export default Orders
