import {Cookies} from 'react-cookie'
import { get_wish } from './wish';
import { get_cart } from './cart';
const cookie = new Cookies()
export const loginfill = async () => {

    const cartobjects=await get_cart()
    const wishobjects=await get_wish()
    const cartproducts=cartobjects?.map(a=>a.product_id)
    const wishproducts=wishobjects?.map(a=>a.product_id)

    cookie.set("mycart", cartproducts );
    cookie.set("mywish", wishproducts );

}
export const getpersonal=()=>{
    const cart= cookie.get("mycart")
    const wish= cookie.get("mywish")
    return({cart:cart,wish:wish})
}
export const update=async()=>{
    await loginfill()
    return getpersonal()
}