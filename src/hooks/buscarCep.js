const axios = require('axios');

async function buscarCep(cep) {
    try {
        const url = `https://cep.awesomeapi.com.br/json/${cep}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error;
    }
}

module.exports = buscarCep;
