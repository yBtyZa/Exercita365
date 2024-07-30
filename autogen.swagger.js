const swaggerAutogen = require('swagger-autogen')()
require('dotenv').config()

const doc = {
    info: {
        title: 'API - Exercita365',
        description: 'O Exercita365 é uma plataforma que facilita o gerenciamento de exercícios e locais para atividades físicas serem praticadas. Os usuários podem cadastrar novos locais de exercícios, encontrar pontos próximos, visualizar informações sobre os os exercícios em cada ponto e registrar suas próprias contribuições para o sistema.',
        version: '1.0.0'
    },
    host: `${process.env.DB_HOST}:${process.env.APP_PORT}`,
    security: [{
        'apiKeyAuth': []
    }],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: "Bearer <token>"
        }
    }
}

const arquivoSaida = './src/routes/doc.swagger.json'
const arquivoRotas = ['./src/routes/routes.js']

swaggerAutogen(arquivoSaida, arquivoRotas, doc)