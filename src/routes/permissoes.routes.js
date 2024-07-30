const { Router } = require('express')
const PermissoesController = require('../controllers/permissoes.controllers')

const verificarPermissoes = require('../middlewares/verificarPermissoes')

const permissoesRouter = Router()

permissoesRouter.post('/', verificarPermissoes(['admin']), PermissoesController.criar)
permissoesRouter.post('/atribuir-permissoes', verificarPermissoes(['admin']), PermissoesController.atribuirPermissoes)

module.exports = permissoesRouter


