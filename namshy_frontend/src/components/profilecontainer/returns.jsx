import { React, useState, useEffect } from "react";
import * as OrdersApi from '../../api/order_items'
import "./table.css"

import ViewReturns from "./ViewReturns";

function Orders() {
    const [OrderList, setOrderList] = useState([])
    const load = async () => {
        await OrdersApi.my_returns().then(e => {
            console.log(e)
            setOrderList(e.data)
        })
    }

    useEffect(() => {
       
        load()
    }, [])

    return (
        <div>
            <div className="add   ">
                <div className="w-100  addheder col-12" style={{ borderBottom: "1px solid gray", textAlign: "center" }} >
                    {" "}
                    <h1>Returns</h1>
                </div>
                <div style={{ width: "100%" }}>
                    {OrderList.map((Order, index) => (
                        <ViewReturns key={index} order={Order} load={load} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Orders
