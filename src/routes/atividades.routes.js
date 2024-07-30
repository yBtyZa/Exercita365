const { Router } = require('express')
const AtividadesController = require('../controllers/atividades.controller')

const atividadesRoutes = Router()

atividadesRoutes.post('/', AtividadesController.criar
    /*
        #swagger.tags = ['Atividades']
        #swagger.description = 'Endpoint para criar uma nova categoria de atividade'
        #swagger.parameters['novaAtividade'] = {
            in: 'body',
            description: 'Informações da nova atividade',
            required: true,
            schema: {
                $categoria: 'Trilha',
            }
        }
        #swagger.responses[201] = {
            description: 'Atividade criada com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'Categoria já existe.'
        }
        #swagger.responses[500] = {
            description: 'Erro ao criar atividade'
        }
    */
)
atividadesRoutes.delete('/:atividade_id', AtividadesController.deletar
    /*
        #swagger.tags = ['Atividades']
        #swagger.description = 'Endpoint para deletar uma atividade'
        #swagger.parameters = [
            {
                name: 'atividade_id',
                in: 'path',
                description: 'ID da atividade a ser deletado',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                }
            }
        ]
       #swagger.responses[200] = {
            description: 'Atividade excluída com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'ID inválido!'
        }
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[404] = {
            description: 'Atividade não encontrada!'
        }
        #swagger.responses[500] = {
            description: 'Erro ao deletar atividade'
        }
    */
)


module.exports = atividadesRoutes