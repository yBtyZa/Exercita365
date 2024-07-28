const { Router } = require('express')
const usuariosRoutes = require('./usuarios.routes')
const loginRoutes = require('./login.routes')

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({
        message: 'Hello World!'
    })
})

routes.use('/usuarios', usuariosRoutes)
routes.use('/login', loginRoutes)


module.exports = routes