const Locais = require('../models/Locais')
const Atividades = require('../models/Atividades')
const LocaisAtividades = require('../models/Locais_atividades')

const buscarCep = require('../hooks/buscarCep')
const linkGoogleMaps = require('../hooks/linkGoogleMaps')

class LocaisController {
    async criar(req, res) {
        try {
            const dados = req.body
            if (!dados.nome || !dados.descricao || !dados.cep || !dados.numero || !dados.atividades_id) {
                return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
            }
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
                const localidade = await buscarCep(dados.cep)
                const maps_link = linkGoogleMaps(localidade.lat, localidade.lng)
                const dadosLocal = {
                    nome: dados.nome,
                    descricao: dados.descricao,
                    localidade: `${localidade.address} ${dados.numero}, ${localidade.district} - ${localidade.city}, ${localidade.state}`,
                    coordenadas: `${localidade.lat}, ${localidade.lng}`,
                    usuario_id: req.usuario.id,
                    maps_link: maps_link
                }
                const novoLocal = await Locais.create(dadosLocal)
                await novoLocal.addAtividades(atividades_id)
                return res.status(201).json(dadosLocal);
            }
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ message: 'Ja existe um local com esse nome!' })
            }
            if(error.name === 'Error') {
                return res.status(400).json({ message: 'CEP inválido ou não encontrado!' })
            }
            return res.status(500).json({ message: 'Não foi possível criar o local' })
        }
    }

    async listar(req, res) {
        try {
            const locais = await Locais.findAll({
                where: {
                    usuario_id: req.usuario.id
                }
            })
            if(locais.length === 0) {
                return res.status(404).json({ message: 'Nenhum local encontrado!' })
            }
            return res.status(200).json(locais.map((local) => {
                return {
                    id: local.id,
                    nome: local.nome,
                    descricao: local.descricao,
                    localidade: local.localidade,
                }
            }))
        } catch (error) {
            return res.status(500).json({ message: 'Não foi possível listar os locais' })
        }
    }

    async listarUm(req, res) {
        try {
            const { local_id } = req.params
            if (isNaN(Number(local_id))) {
                return res.status(400).json({ message: 'ID inválido!' });
            }
            const local = await Locais.findOne({
                where: {
                    id: local_id,
                    usuario_id: req.usuario.id
                },
                include: {
                    model: Atividades,
                    as: 'atividades',
                    through: {
                        attributes: []
                    }
                }
            })
            if(!local) {
                return res.status(404).json({ message: 'Local não encontrado!' })
            }
            const atividades = local.atividades.map(atividade => ({
                id: atividade.id,
                categoria: atividade.categoria
            }))
            return res.status(200).json({
                id: local.id,
                nome: local.nome,
                descricao: local.descricao,
                localidade: local.localidade,
                atividades: atividades
            })
        } catch (error) {
            return res.status(500).json({ message: 'Não foi possível listar o local' })
        }
    }

    async deletar(req, res) {
        try {
            const { local_id } = req.params
            if (isNaN(Number(local_id))) {
                return res.status(400).json({ message: 'ID inválido!' });
            }
            const local = await Locais.findOne({
                where: {
                    id: local_id,
                    usuario_id: req.usuario.id
                }
            })
            if(!local) {
                return res.status(404).json({ message: 'Local não encontrado!' })
            }
            await LocaisAtividades.destroy({
                where: { local_id: local_id }
              });
            await local.destroy()
            return res.status(200).json({ message: 'Local excluído com sucesso!' })
        } catch (error) {
            return res.status(500).json({ message: 'Não foi possível deletar o local' })
        }
    }
}

module.exports = new LocaisController()