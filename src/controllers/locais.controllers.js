const Locais = require('../models/Locais')
const Atividades = require('../models/Atividades')

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
}

module.exports = new LocaisController()