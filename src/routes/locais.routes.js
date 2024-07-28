const { Router } = require('express')
const LocaisController = require('../controllers/locais.controllers')

const locaisRoutes = Router()

locaisRoutes.post('/', LocaisController.criar)

module.exports = locaisRoutes