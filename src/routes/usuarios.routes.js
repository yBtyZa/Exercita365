const { Router } = require('express')
const UsuariosController = require('../controllers/usuarios.controller')

const validaTokenJWT = require('../middlewares/validaTokenJWT')

const usuariosRoutes = Router()

usuariosRoutes.post('/', UsuariosController.criar)
usuariosRoutes.delete('/', validaTokenJWT, UsuariosController.deletar)

module.exports = usuariosRoutes