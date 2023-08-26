import axios from 'axios'
import { backend_url } from '../config'
import {Cookies} from 'react-cookie'
const proxy = `${backend_url}/order_items/create`
const cookie = new Cookies()



const addOrder=async(products, phone, country, firstName, lastName, address, city, zipCode, payment,totalPrice)=>{
    const token = cookie.get('Auth')
    return  axios.post(`${proxy}`, {
        products: products,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address,
        city: city,
        country: country,
        zipCode: zipCode,
        payment: payment,
        totalPrice: totalPrice
    }
    ,{headers:{authorization:token}}
    )
}
export default addOrder