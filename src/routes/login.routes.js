const { Router } = require('express')
const UsuariosController = require('../controllers/usuarios.controller')

const loginRoutes = Router()

loginRoutes.post('/', UsuariosController.login
    /*
        #swagger.tags = ['Login']
        #swagger.description = 'Endpoint para logar no sistema'
        #swagger.parameters['login'] = {
            in: 'body',
            description: 'Informações de login',
            required: true,
            schema: {
                $email: "guilherme@exemple.com",
                $password_hash: "123456"
            }
        }
        #swagger.responses[200] = {
            description: 'Login realizado com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'Todos os campos devem ser preenchidos!'
        }
        #swagger.responses[401] = {
            description: 'Email ou senha inválidos!'
        }
        #swagger.responses[500] = {
            description: 'Não foi possível realizar o login'
        }
    */
)

module.exports = loginRoutes