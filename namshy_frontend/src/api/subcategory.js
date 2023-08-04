import axios from 'axios'
import { backend_url } from '../config'
const proxy = `${backend_url}/subcategory`


export const all_product_category = async () => {
    return (await (await axios.get(`${proxy}`)).data)
}
export const get_product_category_by_id = async (_id) => {
    return (await (await axios.get(`${proxy}/main_category/${_id}`)).data)
}