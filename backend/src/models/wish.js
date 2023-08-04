const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Wishscheema = new Schema({
    user_id: {
        type: String,
    },
    product_id: {
        type: String,
    },

})

Wishscheema.statics.isThisCart = async function (product_id, user_id) {
    if (!product_id) throw new Error('Invalid product_id')
    try {
        const product = await this.findOne({ product_id: product_id, user_id: user_id })
        if (product) return false

        return true
    } catch (error) {
        console.log('error inside isThiscart method ', error.message)
        return false
    }
}


module.exports = mongoose.model.Wish|| mongoose.model("Wish", Wishscheema);