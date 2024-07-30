const { Router } = require('express')
const UsuariosController = require('../controllers/usuarios.controller')

const validaTokenJWT = require('../middlewares/validaTokenJWT')
const verificarPermissoes = require('../middlewares/verificarPermissoes')

const usuariosRoutes = Router()

usuariosRoutes.post('/', UsuariosController.criar)
usuariosRoutes.delete('/', validaTokenJWT, verificarPermissoes(['admin']), UsuariosController.deletar)

module.exports = usuariosRoutes