const { verify } = require('jsonwebtoken')

function validaTokenJWT(req, res, next) {
    try {
        const { authorization } = req.headers
        if(!authorization) {
            return res.status(401).json({ message: 'Token inexistente!' })
        }
        const token = authorization.split(' ')[1]
        const validarToken = verify(token, process.env.JWT_KEY)
        req.usuario = {
            id: validarToken.id,
            nome: validarToken.nome,
            email: validarToken.email
        }
        next()
    } catch (error) {
        if (error.message === 'invalid token' ||
            error.message === 'jwt malformed' ||
            error.message === 'invalid signature' ||
            error.message === 'jwt expired') {
            return res.status(401).json({ message: 'TokenJWT inválido ou expirado' })
        }
        return res.status(500).json({ message: 'A requisição falhou' })
    }
}

module.exports = validaTokenJWT