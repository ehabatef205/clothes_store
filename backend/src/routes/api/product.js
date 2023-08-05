const { Router } = require('express')
const product_controller = require('../../controllers/product')
const multer = require('multer')
const router = Router()

// Set up the multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/'); // Specify the destination folder for uploaded images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname); // Use the current timestamp to generate a unique filename
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.array('images'), product_controller.uplodaImage);

router.get('/', product_controller.AllProducts)
router.get('/:id', product_controller.getProduct)
router.get('/category/:id', product_controller.getProductBySubCategory)
router.get('/category2/:id', product_controller.getProductBySubCategory2)
router.post('/type/:id', product_controller.getProductByType)
router.post('/excel', product_controller.getDataFromExcel)
router.post('/', product_controller.CreateProduct)
router.post('/from_excel', product_controller.CreateProducts)
router.put('/:id', product_controller.UpdateProduct)
router.put('/view/:id', product_controller.UpdateViewProduct)
router.delete('/:id', product_controller.DeleteProduct)

module.exports = router