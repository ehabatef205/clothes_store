import axios from 'axios'
import { backend_url } from '../config'
import {Cookies} from 'react-cookie'
const proxy = `${backend_url}/cart/`

const cookie = new Cookies()

export const add_wish = async (product_id,token) => {
    await axios.post(`${proxy}`, { product_id: product_id }, { headers: { authorization: token } })
}
export const get_wish = async () => {
    const token = await cookie.get('Auth')
    return (await(await axios.get(`${proxy}`, {headers: { 'Authorization': token }})).data.response)
}