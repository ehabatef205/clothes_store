const {Router} = require('express')
const Admincontroller=require('../../controllers/admin')

const router = Router()

router.post('/', Admincontroller.login)

router.post('/new', Admincontroller.signUp)

module.exports = router