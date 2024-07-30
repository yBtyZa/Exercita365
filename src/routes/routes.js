const { Router } = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./doc.swagger.json')
const usuariosRoutes = require('./usuarios.routes')
const loginRoutes = require('./login.routes')
const locaisRoutes = require('./locais.routes')
const permissoesRoutes = require('./permissoes.routes')
const atividadesRoutes = require('./atividades.routes')

const validaTokenJWT = require('../middlewares/validaTokenJWT')
const verificarPermissoes = require('../middlewares/verificarPermissoes')

const routes = Router()

routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

routes.get('/', (req, res) => {
    return res.json({
        message: 'Hello World! Welcome to Exercita365, grab a potato and have fun!'
    })
}
    /*
        #swagger.tags = ['Batata']
        #swagger.description = 'Endpoint para mostrar uma mensagem de boas-vindas!'
        #swagger.responses[200] = {
            description: 'Hello World! Welcome to Exercita365, grab a potato and have fun!'
        }
        #swagger.responses[500] = {
            description: 'Erro ao retornar mensagem de boas-vindas!'
        }
    */
)

routes.use('/usuarios', usuariosRoutes)
routes.use('/login', loginRoutes)
routes.use('/locais', validaTokenJWT, locaisRoutes)
routes.use('/permissoes', validaTokenJWT, permissoesRoutes)
routes.use('/atividades', validaTokenJWT, verificarPermissoes(['admin']), atividadesRoutes)


module.exports = routes