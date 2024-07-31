const Usuarios = require('../models/Usuarios')
const Locais = require('../models/Locais')
const { compareSync } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

const validarEmail = require('../hooks/validarEmail')

class UsuariosController {
    async criar(req, res) {
        try {
            const dados = req.body
            if (!dados.nome ||
                !dados.email ||
                !dados.sexo ||
                !dados.cpf ||
                !dados.endereco ||
                !dados.data_nascimento ||
                !dados.password_hash) {
                return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
            }
            if (!validarEmail(dados.email)) {
                return res.status(400).json({ message: 'Email inválido!' })
            }
            const novoUsuario = await Usuarios.create(dados)
            return res.status(201).json({
                id: novoUsuario.id,
                nome: novoUsuario.nome,
                email: novoUsuario.email,
                sexo: novoUsuario.sexo,
                cpf: novoUsuario.cpf,
                endereco: novoUsuario.endereco,
                data_nascimento: novoUsuario.data_nascimento,
            })
        } catch (error) {
            if (error.parent && error.parent.code === '22P02' && error.parent.message.includes('enum_usuarios_sexo')) {
                return res.status(400).json({ message: 'Sexo invalido, use "Masculino", "Feminino" ou "Outro"!' })
            }
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ message: 'Ja existe um usuario com esse email ou cpf!' })
            }
            if (error.name === 'SequelizeDatabaseError') {
                return res.status(400).json({ message: 'Data de nascimento inválida!' })
            }
            return res.status(500).json({ message: 'Não foi possível criar o usuario' })
        }
    }

    async deletar(req, res){
        try {
            const usuario_id  = req.usuario.id
            const locaisUsuario = await Locais.findAll({
                where: {
                    usuario_id
                }
            })
            if (locaisUsuario.length > 0) {
                return res.status(400).json({ message: 'O usuario tem locais cadastrados e não pode ser excluído' })
            }
            await Usuarios.destroy({ where: { id: usuario_id } })
            return res.status(200).json({ message: 'Usuario excluído com sucesso!' })
        } catch (error) {
            return res.status(500).json({ message: 'Não foi possível excluir o usuario' })
        }
    }

    async login(req, res) {
        try {
            const { email, password_hash } = req.body
            if (!email || !password_hash) {
                return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
            }
            const usuario = await Usuarios.findOne({ where: { email } })
            if (!usuario) {
                return res.status(401).json({ message: 'Email ou senha inválidos!' })
            }
            const password_hashMatch = compareSync(password_hash, usuario.password_hash)
            if (!password_hashMatch) {
                return res.status(401).json({ message: 'Email ou senha inválidos!' })
            }
            const tokenJWT = sign({
                id: usuario.id,
                nome: usuario.nome
            },
            process.env.JWT_KEY,
            {
                expiresIn: '1d'
            }
        )
            return res.status(200).json({
                token: tokenJWT,
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
            })
        } catch (error) {
            return res.status(500).json({ message: 'Não foi possível realizar o login' })
        }
    }
}

module.exports = new UsuariosController()