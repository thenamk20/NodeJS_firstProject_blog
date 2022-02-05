const express = require('express')
const router = express.Router()

const testController = require('../app/controllers/TestController')

router.get('/', testController.show)

module.exports = router