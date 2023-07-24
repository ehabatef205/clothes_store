import axios from 'axios'
import { backend_url } from '../config'
const proxy = `${backend_url}/cart/`

export const add_cart = async (product_id, quantity, token) => {
    await axios.post(`${proxy}`, { product_id: product_id, quantity: quantity }, { headers: { authorization: token } })
}