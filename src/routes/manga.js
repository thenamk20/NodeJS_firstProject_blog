const express = require('express')
const router = express.Router()

const mangaController = require('../app/controllers/MangaController')


router.get('/search', mangaController.search)
router.get('/', mangaController.index)

module.exports = router