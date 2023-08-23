const { Router } = require('express')
const supercontroller=require('../../controllers/superdeal')
const { checkToken } = require("../../auth/token_validation");

const router = Router()
router.get('/',supercontroller.Alldeals)
router.post('/',checkToken,supercontroller.CreateDeal)
module.exports = router