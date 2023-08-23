const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SuperDealSchema = new Schema({
    name: {
        type: String,
    },
    products: [String],
    avilablethrough:{
        type:Date
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    }

})



module.exports = mongoose.model.SuperDeal || mongoose.model("SuperDeal", SuperDealSchema);