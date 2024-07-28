const Locais = require('../models/Locais')
const Atividades = require('../models/Atividades')

class LocaisController {
    async criar(req, res) {
        try {
            const dados = req.body
            if (!dados.nome || !dados.descricao || !dados.localidade || !dados.coordenadas || !dados.maps_link || !dados.atividades_id) {
                return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
            }
            dados.usuario_id = req.usuario.id
            if (dados.atividades_id.length > 0) {
                const atividades_id = await Atividades.findAll({
                    where: {
                        id: dados.atividades_id
                    }
                }
                )
                if(atividades_id.length !== dados.atividades_id.length) {
                    return res.status(400).json({ message: 'Uma ou mais atividades não existem!' })
                }
                const novoLocal = await Locais.create(dados)
                await novoLocal.addAtividades(atividades_id)
                return res.status(201).json({
                    id: novoLocal.id,
                    nome: novoLocal.nome,
                    descricao: novoLocal.descricao,
                    localidade: novoLocal.localidade,
                    coordenadas: novoLocal.coordenadas,
                    maps_link: novoLocal.maps_link,
                    usuario_id: novoLocal.usuario_id,
                    atividades_id: dados.atividades_id
                });
            }
        } catch (error) {
            console.log(error.name)
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ message: 'Ja existe um local com esse nome!' })
            }
            return res.status(500).json({ message: 'Não foi possível criar o local' })
        }
    }
}

module.exports = new LocaisController()