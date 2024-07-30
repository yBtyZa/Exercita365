const { Router } = require('express')
const AtividadesController = require('../controllers/atividades.controller')

const atividadesRoutes = Router()

atividadesRoutes.post('/', AtividadesController.criar)
atividadesRoutes.delete('/:atividade_id', AtividadesController.deletar)


module.exports = atividadesRoutes