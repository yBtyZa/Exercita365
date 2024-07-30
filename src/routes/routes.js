const { Router } = require('express')
const usuariosRoutes = require('./usuarios.routes')
const loginRoutes = require('./login.routes')
const locaisRoutes = require('./locais.routes')
const permissoesRoutes = require('./permissoes.routes')
const atividadesRoutes = require('./atividades.routes')

const validaTokenJWT = require('../middlewares/validaTokenJWT')
const verificarPermissoes = require('../middlewares/verificarPermissoes')

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({
        message: 'Hello World! Welcome to Exercita365, grab a potato and have fun!'
    })
})

routes.use('/usuarios', usuariosRoutes)
routes.use('/login', loginRoutes)
routes.use('/locais', validaTokenJWT, locaisRoutes)
routes.use('/permissoes', validaTokenJWT, permissoesRoutes)
routes.use('/atividades', validaTokenJWT, verificarPermissoes(['admin']), atividadesRoutes)


module.exports = routes