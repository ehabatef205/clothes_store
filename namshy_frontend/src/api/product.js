import axios from 'axios'
import { backend_url } from '../config'
const proxy = `${backend_url}/product`

export const add_product = async ({ Product_name, Product_desc, Product_SKU, Product_category_id, quantity, Product_price, Product_discount_id }) => {
    await axios.post(`${proxy}`, { Product_name, Product_desc, Product_SKU, Product_category_id, quantity, Product_price, Product_discount_id })
}

export const all_product = async () => {
    return (await (await axios.get(`${proxy}`)).data)
}

export const get_product_by_id = async (_id) => {
    return (await (await axios.get(`${proxy}/${_id}`)).data)
}

export const delete_product = async (_id) => {
    await axios.delete(`${proxy}/${_id}`)
}

export const update_product = async (_id, { Product_name, Product_desc, Product_SKU, Product_category_id, quantity, Product_price, Product_discount_id }) => {
    await axios.put(`${proxy}/${_id}`, { Product_name, Product_desc, Product_SKU, Product_category_id, quantity, Product_price, Product_discount_id })
}

export const get_product_by_category = async (_id) => {
    return (await (await axios.get(`${proxy}/category/${_id}`)).data)
}

export const get_product_of_category = async (_id) => {
    return (await (await axios.get(`${proxy}/all_of_category/${_id}`)).data)
}

export const searchProduct = async (query) => {
    return (await axios.post(`${proxy}/search/`, { query }))
}
export const searchpage = async (query) => {
    return await ((await axios.post(`${proxy}/searchpage/`, { query })).data)
}
export const searchpagefilter = async (query, filter) => {
    return await ((await axios.post(`${proxy}/searchpagefilter/`, { query: query, filter: filter })).data)
}
export const carts = async (ids) => {
    return await ((await axios.post(`${proxy}/cart/`, { products: ids })).data.response)
}

export const get_product_filter = async (_id, filter) => {
    return (await (await axios.post(`${proxy}/category/${_id}`, { filter: filter })).data)
}

export const get_product_first_visit = async (_id) => {
    return (await (await axios.get(`${proxy}/first_visit/${_id}`)).data)
}
export const tryon = async (tops,bottoms,gender) => {
    return (await (await axios.post(`${proxy}/tryon`,{garments:{tops:tops,bottoms:bottoms},gender:gender})).data)
}