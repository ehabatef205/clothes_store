const Order_items = require('../models/Order_items')

const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require("dotenv").config();

module.exports.Requestreturn= async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id)
    const oi = await Order_items.findById(_id)
    if(!oi){
        return res.status(404).json({error:'can\'t update order item not found'})
    }
    else if (oi.user_id===req.body.decoded.id)
    await Order_items.findByIdAndUpdate(_id,{returnrequest:"reqested"},{new:true}).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
    else return res.status(401).json({error:"order access invalid"})
}

module.exports.Responsereturn= async (req, res) => {
    const _id = new mongoose.Types.ObjectId(req.params.id)
    const oi = await Order_items.findById(_id)
    if(!oi){
        return res.status(404).json({error:'can\'t update order item not found'})
    }
    else if (oi.suppliers.includes(req.body.decoded.name)||req.body.decoded.admin)
    await Order_items.findByIdAndUpdate(_id,{returnrequest:req.body.state},{new:true}).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
    else return res.status(401).json({error:"order access invalid"})
}
