const { Router } = require('express')
const product_controller = require('../../controllers/product')

const router = Router()

router.get('/', product_controller.AllProducts)
router.get('/:id', product_controller.getProduct)
router.get('/category/:id', product_controller.getProductBySubCategory)
router.post('/type/:id', product_controller.getProductByType)
router.post('/excel', product_controller.getDataFromExcel)
router.post('/', product_controller.CreateProduct)
router.post('/from_excel', product_controller.CreateProducts)
router.put('/:id', product_controller.UpdateProduct)
router.put('/view/:id', product_controller.UpdateViewProduct)
router.delete('/:id', product_controller.DeleteProduct)

module.exports = router
