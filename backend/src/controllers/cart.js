const mongoose = require('mongoose')
const Cart = require('../models/cart')
const jwt = require('jsonwebtoken')
require("dotenv").config();

module.exports.Create_cart_item = async (req, res) => {
  
    const id = req.body.decoded.id;

    const cart_item = req.body

    const isNewCart = await Cart.isThisCart(cart_item.product_id, id)
    if (!isNewCart) {
        return res.json({
            message: 'This product is already in cart'
        })
    }

    await add_cart_item(cart_item, id).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log('err', err)
        return res.status(401).json(err)
    })
}

const add_cart_item = async ({ product_id, quantity,size,color }, id) => {
    const newCart_item = new Cart({
        user_id: id,
        product_id,
        quantity,
        size,
        color
    })
    await newCart_item.save()
    return newCart_item
}

module.exports.Read_cart_item = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id);
    await Cart.findById(_id).then(e => {
        if (!e) {
            return res.status(404).json({ error: "cart item not found" })
        }
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({ error: err.message })
    })
}

module.exports.Read_cart_items = async (req, res) => {
    
    const id = req.body.decoded.id;


    await Cart.find({ user_id: id }).then(e => {
        return res.status(200).json({
            response: e
        })
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({ error: err.message })
    })
}

module.exports.Delete_cart_item = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id)
    const oi = await Cart.findById(_id)
    if (!oi) {
        return res.status(204).json({ error: 'can\'t delete cart item not found' })
    }
    await Cart.findByIdAndDelete(_id).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({ error: err.message })
    })
}

module.exports.Update_cart_item = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id)
    const cart_item = req.body
    const oi = await Cart.findById(_id)
    if (!oi) {
        return res.status(404).json({ error: 'can\'t update cart item not found' })
    }
    await Cart.findByIdAndUpdate(_id, cart_item, { new: true }).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({ error: err.message })
    })
}

module.exports.add_one_quantity = async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id)
    await Cart.findById(_id).then(e => {
        if (!e) {
            return res.status(404).json({ error: 'can\'t update cart not found!' })
        }
    })
    await Cart.findByIdAndUpdate(_id, { $inc: { quantity: 1 } }, { new: true }).then(e => {
       return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({ error: err.message })
    })
}

module.exports.remove_one_quantity = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id)
    await Cart.findById(id).then(e => {
        if (!e) {
            return res.status(404).json({ error: 'can\'t update cart not found!' })
        }
    })
    await Cart.updateOne({_id:id,quantity:{$gt:1}} , { $inc: { quantity: -1 } }, { new: true }).then(e => {
        res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        res.status(401).json({ error: err.message })
    })
}

module.exports.Delete_by_product = async (req, res) => {
    const product_id = req.params.id
    const user= req.body.decoded.id
    await Cart.deleteOne({user_id:user,product_id:product_id}).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({ error: err.message })
    })
}