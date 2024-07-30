const { Router } = require('express')
const LocaisController = require('../controllers/locais.controllers')

const locaisRoutes = Router()

locaisRoutes.post('/', LocaisController.criar
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Endpoint para criar um novo local'
        #swagger.parameters['novoLocal'] = {
            in: 'body',
            description: 'Informações do novo local',
            required: true,
            schema: {
                $nome: 'Ciclovia Beira-Mar Norte',
                $descricao: " Uma ciclovia ao longo da Beira-Mar Norte, proporcionando uma vista incrível do mar e da cidade. É uma opção mais plana e tranquila para passeios de bicicleta",
                $cep: "88015-702",
                $numero: 0,
                $atividades_id: [
                    1,
                    2,
                    8
                ]
            }
        }
        #swagger.responses[201] = {
            description: 'Local criado com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'Todos os campos devem ser preenchidos!'
        }
        #swagger.responses[400] = {
            description: 'Uma ou mais atividades não existem!'
        }
        #swagger.responses[400] = {
            description: 'Selecione pelo menos uma atividade!'
        }
        #swagger.responses[400] = {
            description: 'Já existe um local com esse nome!'
        }
        #swagger.responses[400] = {
            description: 'CEP inválido ou não encontrado!'
        }    
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[500] = {
            description: 'Não foi possível criar o local'
        }
    */
)
locaisRoutes.get('/', LocaisController.listar
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Endpoint para listar todos os locais criados pelo usuário logado'
        #swagger.responses[200] = {
            description: 'Locais retornados com sucesso!'
        }
        #swagger.responses[404] = {
            description: 'Nenhum local encontrado!'
        }
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[500] = {
            description: 'Não foi possível listar os locais'
        }
    */
)
locaisRoutes.get('/:local_id', LocaisController.listarUm
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Endpoint para listar um local criado pelo usuário logado'
        #swagger.parameters = [
            {
                name: 'local_id',
                in: 'path',
                description: 'ID do local a ser pesquisado',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                }
            }
        ]
        #swagger.responses[200] = {
            description: 'Local retornado com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'ID inválido!'
        }
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[404] = {
            description: 'Local não encontrado!'
        }
        #swagger.responses[500] = {
            description: 'Não foi possível listar o local'
        }
    */
)
locaisRoutes.delete('/:local_id', LocaisController.deletar
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Endpoint para deletar um local criado pelo usuário logado'
        #swagger.parameters = [
            {
                name: 'local_id',
                in: 'path',
                description: 'ID do local a ser deletado',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                }
            }
        ]
       #swagger.responses[200] = {
            description: 'Local excluído com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'ID inválido!'
        }
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[404] = {
            description: 'Local não encontrado!'
        }
        #swagger.responses[500] = {
            description: 'Não foi possível deletar o local'
        }
    */
)
locaisRoutes.put('/:local_id', LocaisController.editar
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Endpoint para editar um local criado pelo usuário logado'
        #swagger.parameters = [
            {
                name: 'local_id',
                in: 'path',
                description: 'ID do local a ser editado',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                }
            }
        ]
       #swagger.responses[200] = {
            description: 'Local editado com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'ID inválido!'
        }
        #swagger.responses[400] = {
            description: 'Ja existe um local com esse nome!'
        }
        #swagger.responses[400] = {
            description: 'CEP inválido ou não encontrado!'
        }
        #swagger.responses[400] = {
            description: 'Uma ou mais atividades não existem!'
        }
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[404] = {
            description: 'Acesso negado ou local não encontrado.'
        }
        #swagger.responses[500] = {
            description: 'Não foi possível editar o local'
        }
    */
)
locaisRoutes.get('/:local_id/maps', LocaisController.exibirLinkMaps
    /*
        #swagger.tags = ['Google Maps']
        #swagger.description = 'Endpoint para exibir o link do Google Maps do local criado pelo usuário logado'
        #swagger.parameters = [
            {
                name: 'local_id',
                in: 'path',
                description: 'ID do local a ser exibido',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                }
            }
        ]
       #swagger.responses[200] = {
            description: 'Link do Google Maps retornado com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'ID inválido!'
        }
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[404] = {
            description: 'Acesso negado ou local não encontrado.'
        }
        #swagger.responses[500] = {
            description: 'Não foi possível exibir o link do Google Maps'
        }
    */
)

module.exports = locaisRoutes