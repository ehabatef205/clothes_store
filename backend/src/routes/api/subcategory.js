const {Router} = require('express')
const SubCategoryRouter = require('../../controllers/sub_category')

const router = Router()

router.get('/', SubCategoryRouter.get_subcategory)
router.get('/:id', SubCategoryRouter.get_subcategory_by_id)
router.get('/main_category/:id', SubCategoryRouter.get_subcategory_by_main_category)
router.get('/main_category2/:id', SubCategoryRouter.get_subcategory_by_main_category2)
router.post('/', SubCategoryRouter.add_subcategory)
router.put('/:id', SubCategoryRouter.update_subcategory)
router.delete('/:id', SubCategoryRouter.delete_subcategory)
router.put('/view/:id', SubCategoryRouter.UpdateViewSubcategory)

module.exports = router