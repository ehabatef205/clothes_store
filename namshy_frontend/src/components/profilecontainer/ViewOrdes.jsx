import { React, useState, useEffect } from "react";
import OrderProductList from "./orderProductList";
import * as OrdersApi from '../../api/order_items'
import "./style.css";
import "./table.css";

export default function ViewOrders(props) {
  const [open, setOpen] = useState(false);
  const options = ["processing", "shipping", "completed"];

  const handelreturn = () => {
    OrdersApi.requestreturn(props.order._id).then(props.load)
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div style={nameStyle} >
        <div style={{ display: "inline-block", fontSize: "20px" }}>
          {"Order number #" +props.order._id+"#        "+props.order.payment + "   " + props.order.totalPrice}
        </div>
        <div style={{ display: "inline-block", fontSize: "20px" }}>
          {"status:   "+ props.order.status}
          
        </div>
        {open ? (
          <div style={{ fontSize: "20px" }} onClick={handleClick}>{"<"}</div>
        ) : (
          <div style={{ fontSize: "20px" }} onClick={handleClick}>{">"}</div>
        )}
      </div>
      {open ? (
        <div style={{ width: "100%" }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>address</th>
                <th>Country</th>
                <th>phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.order.firstName + " " + props.order.lastName}</td>
                <td>
                  <i>
                    {" "}
                    {"address:" +
                      props.order.address +
                      " city: " +
                      props.order.city +
                      "  zipCode: " +
                      props.order.zipCode}{" "}
                  </i>
                </td>
                <td>
                  <i>{props.order.country}</i>
                </td>
                <td>
                  <i>{props.order.phone}</i>
                </td>
                {props.order.status==="completed"?<td><button disabled={!(props.order.status==="completed") } onClick={handelreturn}>initiate return?</button></td>:<></>
                } 
              </tr>
                
                    
                    
              <OrderProductList
                products={props.order.products}
              ></OrderProductList>
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

const nameStyle = {
  padding: "10px",
  width: "100%",
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
