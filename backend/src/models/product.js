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
    quantity: {
        type: Number,
        default: 0
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
            color: 'white',
            type: 'cotton',
            brand: {
                name: 'nike',
                logo: '#'
            },
            description: 'high quality cloth.'
        }
    },
    sizes: {
        type: Object,
        default: {
            s: 0,
            m: 0,
            l: 0,
            xl: 0,
            xxl: 0
        }
    },
    view: {
        type: Boolean
    }
}, { timeseries: true })


module.exports = mongoose.model.Product || mongoose.model("Product", Productschema);