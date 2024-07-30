const Permissoes = require('../models/Permissoes')
const Usuarios = require('../models/Usuarios')

class PermissoesController {
    async criar(req, res) {
        try {
            const dados = req.body
            if(!dados.nome){
                return res.status(400).json({message: 'Nome da permissão obrigatório'})
            }
            const permissoes = await Permissoes.create(dados)
            return res.status(201).json({
                id: permissoes.id,
                nome: permissoes.nome
            })
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError'){
                return res.status(400).json({message: 'Permissão ja existe'})
            }
            return res.status(500).json({message: 'Erro ao criar permissão'})
        }
    }
    async atribuirPermissoes(req, res) {
        try{
            const { usuario_id, permissao_id } = req.body
            const usuario = await Usuarios.findByPk(usuario_id)
            const permissao = await Permissoes.findByPk(permissao_id)
            if(!usuario || !permissao) {
                return res.status(404).json({ message: 'Usuario ou permissão não encontrados' })
            }
            await usuario.addPermissoes(permissao)
            return res.status(200).json({ message: 'Permissão atribuída com sucesso!' })
        } catch(error) {
            return res.status(500).json({message: 'Erro ao atribuir permissão'})
        }
    }
}

module.exports = new PermissoesController()