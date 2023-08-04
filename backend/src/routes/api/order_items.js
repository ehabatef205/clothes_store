const {Router} = require('express')
const order_items_controller = require('../../controllers/order_items')
const { checkToken } = require('../../auth/token_validation')

const router = Router()

router.post('/create',order_items_controller.Create_order_item)
router.get('/',order_items_controller.Read_order_items)
router.post('/supplierorder',checkToken,order_items_controller.Supplier_order_items)
router.post('/supplierreturn',checkToken,order_items_controller.Supplier_return_items)
router.post('/myorders',checkToken,order_items_controller.User_Orders)
router.post('/myreturns',checkToken,order_items_controller.User_returns)
router.post('/returns',order_items_controller.returns)
router.post('/requestreturn/:id',checkToken,order_items_controller.start_return)
router.get('/:id', order_items_controller.Read_order_item)
router.delete('/:id',order_items_controller.Delete_order_item)
router.put('/:id',order_items_controller.Update_order_item)

module.exports = router