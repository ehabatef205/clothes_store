const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Productschema = new Schema({
    supplier: {
        type: String,
    },
    category_id: {
        type: String,
    },
    subCategory: {
        type: String
    },
    typeOfProduct: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    SKU: {
        type: String,
        required: true,
        unique: true
    },
    price_before: {
        type: Number,
        default: 0
    },
    price_after: {
        type: Number,
        default: 0
    },
    imageSrc: {
        type: Array,
        default: []
    },
    desc: {
        type: Object,
        default: {
            type: 'cotton',
            brand: {
                name: 'nike',
                logo: '#'
            },
            description: 'high quality cloth.'
        }
    },
    view: {
        type: Boolean
    }
    ,
    sizeable:{
        type: Boolean
    },
    colors:{
        type: Boolean
    }
    ,
    quantity:{
        type:Object
    },
    dressing: {
        type: Boolean
    },
    gender: {
        type: String,
    },
    vrpos: {
        type: String,
    },
    vrpossec: {
        type: String,
    },
    garment_id: {
        type: String,
    },
}, { timeseries: true })


module.exports = mongoose.model.Product || mongoose.model("Product", Productschema);