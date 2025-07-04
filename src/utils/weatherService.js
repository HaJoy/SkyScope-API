const axios = require('axios');

/**
 * Devuelve la informacion del clima en las coordenadas solicitadas.
 * @async
 * @param {number} lat - Latitud de la ciudad.
 * @param {number} lon - Longitud de la ciudad.
 * @returns {Promise<object>} JSON con la informacion del clima.
 * @throws {Error} Lanza un error si ocurre algo en la peticion.
 */
exports.getWeather = async (lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
            lat,
            lon,
            appid: process.env.API_KEY
        }
    });
    return response.data;
};