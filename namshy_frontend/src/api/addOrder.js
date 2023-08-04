import axios from 'axios'
import { backend_url } from '../config'
import {Cookies} from 'react-cookie'
const proxy = `${backend_url}/order_items/create`
const cookie = new Cookies()



const addOrder=async(products, phone, country, firstName, lastName, address, city, zipCode,totalPrice)=>{
    const token = cookie.get('Auth')
    return  axios.post(`${proxy}`, {
        products: products,
        phone: phone,
        country: country,
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        zipCode: zipCode,
        payment: "cash",
        totalPrice: totalPrice
    }
    ,{headers:{authorization:token}}
    )
}
export default addOrder