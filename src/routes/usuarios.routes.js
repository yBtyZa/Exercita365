const { Router } = require('express')
const UsuariosController = require('../controllers/usuarios.controller')

const validaTokenJWT = require('../middlewares/validaTokenJWT')

const usuariosRoutes = Router()

usuariosRoutes.post('/', UsuariosController.criar
    /*
        #swagger.tags = ['Usuários']
        #swagger.description = 'Endpoint para criar um novo usuário'
        #swagger.parameters['novoUsuario'] = {
            in: 'body',
            description: 'Informações do novo usuário',
            required: true,
            schema: {
                $nome: 'Guilherme Betsa',
                $email: "guilherme@exemple.com",
                $sexo: "Masculino",
                $cpf: "123.456.789-10",
                $endereco: "Rua do Node com Sequelize, 10",
                $data_nascimento: "2002-01-01",
                $password_hash: "123456"
            }
        }
        #swagger.responses[201] = {
            description: 'Usuário criado com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'Todos os campos devem ser preenchidos!'
        }
        #swagger.responses[500] = {
            description: 'Não foi possível criar o usuário'
        }
    */
)

usuariosRoutes.delete('/', validaTokenJWT, UsuariosController.deletar
    /*
        #swagger.tags = ['Usuários']
        #swagger.description = 'Endpoint para deletar o usuário logado'
        #swagger.security = [{
            "bearerAuth": []
        }]
        #swagger.responses[200] = {
            description: 'Usuário excluído com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'O usuário tem locais cadastrados e não pode ser excluído'
        }
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[500] = {
            description: 'Não foi possível excluir o usuário'
        }
    */
)

module.exports = usuariosRoutes
