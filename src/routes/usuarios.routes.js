const { Router } = require('express')
const UsuariosController = require('../controllers/usuarios.controller')

const usuariosRoutes = Router()

usuariosRoutes.post('/', UsuariosController.criar)

module.exports = usuariosRoutes