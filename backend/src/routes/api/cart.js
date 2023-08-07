const { Router } = require('express')
const CartController = require('../../controllers/cart')
const { checkToken } = require("../../auth/token_validation");

const router = Router()

router.post('/', CartController.Create_cart_item)
router.post('/:id',checkToken, CartController.Delete_by_product)
router.get('/', CartController.Read_cart_items)
router.get('/:id', CartController.Read_cart_item)
router.delete('/:id', CartController.Delete_cart_item)
router.put('/:id', CartController.Update_cart_item)
router.put('/plus/:id', checkToken, CartController.add_one_quantity)
router.put('/minus/:id', checkToken, CartController.remove_one_quantity)

module.exports = router