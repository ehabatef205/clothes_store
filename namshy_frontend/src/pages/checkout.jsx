import { React, useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import addOrder from "../api/addOrder"
import * as productsapi from '../api/product'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const carts = location.state;
  const [products, setProducts] = useState([])
  const [priceProducts, setPriceProducts] = useState([])
  const [payment, setPayment] = useState("الدفع عند الاستلام")
  var allPrice = 0
  var loop = 0

  const addProducts = async () => {
    allPrice = 0
    for (var i = 0; i < carts.length; i++) {
      const product = { product_id: carts[i].product_id, quantity: carts[i].quantity, color: carts[i].color, size: carts[i].size }
      setProducts(products => [...products, product])
      await productsapi.get_product_by_id(carts[i].product_id).then(async (product1) => {

        allPrice = allPrice + (product1.price_after * carts[i].quantity)
      })
    }

    setPriceProducts(allPrice + 50)

  }
  useEffect(() => {
    if (loop === 0) {
      loop += 1
      addProducts()
    }
  }, [])
  useEffect(() => {
    console.log(products)
  }, [products])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addOrder(products, formData?.firstName, formData?.lastName, formData?.phone, formData?.address, formData?.city, formData?.country, formData?.zipCode, "cash", priceProducts).then(async res => {
      console.log(res.data)
      navigate("/orders", { replace: true })
    })
  }

  const handleSelection = (e) => {
    if (e.target.value === "ادفع الان") {
      if (formData.firstName.trim() !== "" && formData?.lastName.trim() !== "" && formData?.phone.trim() !== "" && formData?.address.trim() !== "" && formData?.city.trim() !== "" && formData?.country.trim() !== "" && formData?.zipCode.trim() !== "") {
        setPayment(e.target.value)
      } else {
        toast.warning("Please Fill all fields", {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    } else {
      setPayment(e.target.value)
    }
    console.log(e.target.value)
  }

  const initialOptions = {
    clientId: "AbHZZAi6Hm95o2PH8A8C0l8bNO9N4kAqrACsL44T2ziyvLe8BFHEpw5Z2Sau0Wbfozu7YzeNFcO10hyc",
    currency: "USD",
    intent: "capture",
  };

  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    return fetch("https://different-puce-shorts.cyclic.cloud/my-server/create-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        products: {
          cost: priceProducts,
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };

  const onApprove = (data) => {
    // Order is captured on the server and the response is returned to the browser
    return fetch("https://different-puce-shorts.cyclic.cloud/my-server/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    })
      .then((response) => response.json()).then(async (order) => {
        if (order.status === "COMPLETED") {
          await addOrder(products, formData?.firstName, formData?.lastName, formData?.phone, formData?.address, formData?.city, formData?.country, formData?.zipCode, "onlice", priceProducts).then(async res => {
            console.log(res.data)
            navigate("/orders", { replace: true })
          })
        }
      });
  };

  return (<form className="w-100" onSubmit={handleSubmit}><div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    <input
      style={inputText5}
      type="text"
      name="firstName"
      placeholder='الاسم الاول'
      autoComplete='off'
      onChange={(e) =>
        setFormData({
          ...formData,
          firstName: e.target.value,
        })
      }
      required
    />
    <input
      style={inputText5}
      type="text"
      name="lastName"
      placeholder='الاسم الاخير'
      autoComplete='off'
      onChange={(e) =>
        setFormData({
          ...formData,
          lastName: e.target.value,
        })
      }
      required
    />
    <input
      style={inputText5}
      type="text"
      name="phone"
      placeholder='رقم الهاتف'
      autoComplete='off'
      onChange={(e) =>
        setFormData({
          ...formData,
          phone: e.target.value,
        })
      }
      required
    />
    <input
      style={inputText5}
      type="text"
      name="address"
      placeholder='العنوان'
      autoComplete='off'
      onChange={(e) =>
        setFormData({
          ...formData,
          address: e.target.value,
        })
      } required />
    <input
      style={inputText5}
      type="text"
      name="city"
      placeholder='المدينة'
      autoComplete='off'
      onChange={(e) =>
        setFormData({
          ...formData,
          city: e.target.value,
        })
      } required />
    <input
      style={inputText5}
      type="text"
      name="country"
      placeholder='الدولة'
      autoComplete='off'
      onChange={(e) =>
        setFormData({
          ...formData,
          country: e.target.value,
        })
      }
      required
    />
    <input
      style={inputText5}
      type="number"
      name="zipCode"
      placeholder='الرمز البريدي'
      autoComplete='off'
      onChange={(e) =>
        setFormData({
          ...formData,
          zipCode: e.target.value,
        })
      } required />
    <div style={divPrice}>السعر الكلي: ${priceProducts}</div>
    <div style={divPrice}>
      <label style={{ padding: "10px" }}>
        <input type="radio" value="ادفع الان" checked={payment === "ادفع الان"} onChange={handleSelection} />
        ادفع الان
      </label>
      <label style={{ padding: "10px" }}>
        <input type="radio" value="الدفع عند الاستلام" checked={payment === "الدفع عند الاستلام"} onChange={handleSelection} />
        الدفع عند الاستلام
      </label>
    </div>
    {payment === "ادفع الان" ? <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </PayPalScriptProvider> : <button
      className="btn text-light my-3 h-50 w-50"
      type="submit"
      style={{ backgroundColor: "blue" }}
    >
      Checkout
    </button>}
    <ToastContainer />
  </div ></form>)
}

const inputText5 = {
  border: "1px solid #000",
  borderRadius: "15px",
  width: "calc(50%)",
  padding: "10px",
  marginTop: "20px",
  textAlign: "right",
  margin: "10px"
}

const divPrice = {
  borderRadius: "15px",
  width: "100%",
  padding: "5px",
  marginTop: "20px",
  textAlign: "center",
  margin: "5px",
}

export default Checkout;

