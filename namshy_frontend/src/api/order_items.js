import axios from 'axios'
import {Cookies} from 'react-cookie'

import {backend_url} from '../config'
const proxy = `${backend_url}/order_items`
const cookie = new Cookies()



export const add_order_item = async ({order_id, product_id, quantity}) => {
    await axios.post(`${proxy}/create`,{order_id, product_id, quantity})
}



export const my_orders = async () => {
    const token = cookie.get('Auth')
    return (await(await axios.post(`${proxy}/myorders`,{},{headers: { 'Authorization': token }})))
}
export const my_returns = async () => {
    const token = cookie.get('Auth')
    return (await( await axios.post(`${proxy}/myreturns`,{},{headers: { 'Authorization': token }})))
}

export const requestreturn = async (id) => {
    const token =await cookie.get('Auth')
    console.log(token )
    return (await( await axios.post(`${proxy}/requestreturn/${id}`,{},{headers: { 'Authorization': token }})))
}


export const all_order_items = async () => {
    return (await (await axios.get(`${proxy}`)).data)
}

export const get_order_item_by_id = async (_id) => {
    return (await (await axios.get(`${proxy}/${_id}`)).data)
}

export const delete_order_item = async (_id) => {
    await axios.delete(`${proxy}/${_id}`)
}

export const update_order_item = async (_id,{order_id, product_id, quantity}) => {
    await axios.put(`${proxy}/${_id}`, {order_id, product_id, quantity})
}