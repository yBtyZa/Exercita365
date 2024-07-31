const { Router } = require('express')
const PermissoesController = require('../controllers/permissoes.controllers')

const verificarPermissoes = require('../middlewares/verificarPermissoes')

const permissoesRouter = Router()

permissoesRouter.post('/', verificarPermissoes(['admin']), PermissoesController.criar
    /*
        #swagger.tags = ['Permissões']
        #swagger.description = 'Endpoint para criar uma nova permissão'
        #swagger.parameters['novaPermissao'] = {
            in: 'body',
            description: 'Informações do novo local',
            required: true,
            schema: {
                $nome: 'Moderator',
            }
        }
        #swagger.responses[201] = {
            description: 'Permissão criada com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'Nome da permissão obrigatório'
        }
        #swagger.responses[400] = {
            description: 'Permissão ja existe'
        }
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[403] = {
            description: 'Acesso negado'
        }
        #swagger.responses[500] = {
            description: 'Erro ao criar permissão'
        }
    */
)
permissoesRouter.post('/atribuir-permissoes', verificarPermissoes(['admin']), PermissoesController.atribuirPermissoes
    /*
        #swagger.tags = ['Permissões']
        #swagger.description = 'Endpoint para atribuir uma nova permissão a um usuário'
        #swagger.parameters['novaPermissao'] = {
            in: 'body',
            description: 'Informações da permissão',
            required: true,
            schema: {
                $usuario_id: 3,
                $permissao_id: 1
            }
        }
        #swagger.responses[200] = {
            description: 'Permissão atribuída com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'Usuario e permissão são obrigatórios!'
        }
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[403] = {
            description: 'Acesso negado'
        }
        #swagger.responses[404] = {
             description: 'Usuario ou permissão não encontrados'
        }
        #swagger.responses[500] = {
            description: 'Erro ao atribuir permissão'
        }
    */
)

module.exports = permissoesRouter


