const Order_items = require('../models/Order_items')
const Cart = require('../models/cart')
const Product = require('../models/product.js')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const emailController = require('./ordermail')

require("dotenv").config();

module.exports.Create_order_item = async (req, res) => {
    const usertoken = req.headers.authorization;
    const token = usertoken.split(' ');
    const decoded = jwt.verify(token[1], process.env.JWT_KEY);
    const id = decoded.id;

    const body = req.body

    let list = [];
    let suppliers=[]
   

    for (var i = 0; i < body.products.length; i++){
        console.log(body.products[i].product_id);
        await Product.findById(body.products[i].product_id).then(async (product) => {
            body.products[i].image=product.imageSrc[0]
            body.products[i].SKU=product.SKU
            body.products[i].name=product.name
            if(!suppliers.includes(product.supplier)){
                suppliers.push(product.supplier)
            }
            await Product.findByIdAndUpdate(body.products[i].product_id, {$set: {quantity: product.quantity - body.products[i].quantity}}).then(async (product1) => {        
                await Cart.findOneAndDelete({product_id: body.products[i].product_id, user_id:  id}).then(e => {
                    list.push("Done")
                })
            })
        })
    }

    if(list.length === body.products.length){
        await add_order_item(body, id,suppliers).then(e => {
            emailController.sendMail(decoded.email,e.firstName,e._id,e.totalPrice)
            return res.status(200).json(e)
        }).catch(err => {
            console.log('err',err)
            return res.json(err)
        })
    }
}

const add_order_item = async (body, id,suppliers) => {
    const newOrder_item = new Order_items({
        user_id: id,
        products: body.products,
        phone: body.phone,
        country: body.country,
        firstName: body.firstName,
        lastName: body.lastName,
        address: body.address,
        city: body.city,
        zipCode: body.zipCode,
        payment: body.payment,
        totalPrice: body.totalPrice,
        status:'processing'
        ,suppliers:suppliers,
        returnrequest:'none'

    })
    await newOrder_item.save()
    return newOrder_item
}

module.exports.Read_order_item = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id);
    await Order_items.findById(_id).then(e => {
        if(!e){
            return res.status(404).json({error:"order item not found"})
        }
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}

module.exports.Read_order_items = async (req, res) => {


    await Order_items.find().then(e =>{
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}
module.exports.Supplier_order_items = async (req, res) => {
    await Order_items.find({suppliers:req.body.decoded.name,returnrequest:'none'}).then(e =>{
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}
module.exports.Supplier_return_items = async (req, res) => {
    await Order_items.find({suppliers:req.body.decoded.name,returnrequest:{$ne:'none'}}).then(e =>{
        console.log(e)
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}

module.exports.Delete_order_item = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id)
    const oi = await Order_items.findById(_id)
    if(!oi){
        return res.status(404).json({error:'can\'t delete order item not found'})
    }
    await Order_items.findByIdAndDelete(_id).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}

module.exports.Update_order_item = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id)
    const order_item = req.body
    const oi = await Order_items.findById(_id)
    if(!oi){
        return res.status(404).json({error:'can\'t update order item not found'})
    }
    await Order_items.findByIdAndUpdate(_id,order_item,{new:true}).then(e => {
        if(e.returnrequest==="accepted"|| e.returnrequest==="denied"){
            emailController.returnsMail(e.firstName,e._id,e.returnrequest)}
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}
module.exports.start_return = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id)
    const oi = await Order_items.findById(_id)
    if(!oi){
        return res.status(404).json({error:'can\'t update order item not found'})
    }
    await Order_items.findByIdAndUpdate(_id,{returnrequest:"requested"},{new:true}).then(e => {
        
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}
module.exports.User_Orders= async (req, res) => {
    const id = req.body.decoded.id;
    await Order_items.find({user_id:id,returnrequest:'none'}).then(response => {
        return res.status(200).json(response)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}
module.exports.User_returns= async (req, res) => {
    const id = req.body.decoded.id;
    await Order_items.find({user_id:id,returnrequest:{$ne:'none'}}).then(response => {
        return res.status(200).json(response)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}
module.exports.returns= async (req, res) => {
    await Order_items.find({returnrequest:{$ne:'none'}}).then(response => {
        return res.status(200).json(response)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}