const { Router } = require('express')
const LocaisController = require('../controllers/locais.controllers')

const locaisRoutes = Router()

locaisRoutes.post('/', LocaisController.criar)
locaisRoutes.get('/', LocaisController.listar)
locaisRoutes.get('/:local_id', LocaisController.listarUm)
locaisRoutes.delete('/:local_id', LocaisController.deletar)

module.exports = locaisRoutes