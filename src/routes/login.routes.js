const { Router } = require('express')
const UsuariosController = require('../controllers/usuarios.controller')

const loginRoutes = Router()

loginRoutes.post('/', UsuariosController.login)

module.exports = loginRoutes