const Product = require('../models/product.js')
const mongoose = require('mongoose')


module.exports.AllProducts = (req, res) => {
    Product.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
            })
        })
}
module.exports.CreateProduct = async (req, res, next) => {
    const body = req.body
    body.supplier='Wolf'
    const product = new Product(body)

    await product.save()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {

            res.json({
                message: error.message
            })
        })
}

module.exports.UpdateProduct = async (req, res) => {
    const body = req.body
    let _id = new mongoose.Types.ObjectId(req.params.id)
    await Product.findOneAndUpdate({ _id: _id }, body, { new: true }).then(e => {
        return res.status(200).json(e)
    }).catch(err => {

        return res.json({ message: "Error" })
    })
}

module.exports.UpdateViewProduct = async (req, res) => {
    const body = req.body
    let _id = new mongoose.Types.ObjectId(req.params.id)
    await Product.findOneAndUpdate({ _id: _id }, { $set: body }, { new: true }).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        return res.json({ message: "Error" })
    })
}

module.exports.DeleteProduct = async (req, res) => {
    let _id = new mongoose.Types.ObjectId(req.params.id)
    await Product.deleteOne({ _id: _id }).then(e => {
        return res.status(200).json(e)
    }).catch(err => {

        return res.json({ message: "Error" })
    })
}

module.exports.getProduct = async (req, res) => {
    let _id = new mongoose.Types.ObjectId(req.params.id)
    await Product.findOne({ _id: _id }).then(e => {
        return res.json(e)
    }).catch(err => {
        return res.json({ message: "Error" })
    })
}

module.exports.getProductByType = async (req, res) => {
    let _id = req.params.id
    if (_id === 'undefined') {
        _id = { $gte: "" }
    }
    await Product.find({ category_id: _id, typeOfProduct: req.body.typeOfProduct }).then(e => {
        return res.json({
            response: e
        })
    }).catch(err => {
        return res.json({ message: "Error" })
    })
}

module.exports.getProductBySubCategory = async (req, res) => {
    let _id = req.params.id
    await Product.find({ subCategory: _id }).then(e => {
        return res.json({
            response: e
        })
    }).catch(err => {
        return res.json({ message: err.message })
    })
}