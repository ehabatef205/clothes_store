const express = require('express')
const router = express.Router()

const createImage = async (req, res, next) => {
    const image = req.files.image
    
    res.json({
        message: image.tempFilePath
    })
}

router.post('/image', createImage)

module.exports = router