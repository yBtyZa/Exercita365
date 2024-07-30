const Atividades = require('../models/Atividades')

class AtividadesController {
    async criar(req, res) {
        try {
            const dados = req.body
            const novaAtividade = await Atividades.create(dados)
            return res.status(201).json({
                id: novaAtividade.id,
                categoria: novaAtividade.categoria
            })
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ message: 'Categoria já existe.' })
            }
            return res.status(500).json({ message: 'Erro ao criar atividade' })
        }
    }

    async deletar(req, res) {
        try {
            const { atividade_id } = req.params
            if (isNaN(Number(atividade_id))) {
                return res.status(400).json({ message: 'ID inválido!' })
            }
            const atividade = await Atividades.findOne({
                where: {
                    id: atividade_id
                }
            })
            if (!atividade) {
                return res.status(404).json({ message: 'Atividade não encontrada!' })
            }
            await Atividades.destroy({
                where: { id: atividade_id }
            })
            return res.status(200).json({ message: 'Atividade excluída com sucesso!' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Erro ao deletar atividade' })
        }
    }
}

module.exports = new AtividadesController()