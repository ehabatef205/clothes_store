import axios from 'axios'
import {backend_url} from '../config'
const proxy = `${backend_url}/superdeals`




export const getall = async () => {
    return  (await(axios.get(`${proxy}`)))
}