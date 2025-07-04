const axios = require('axios');

/** 
 * Devuelve las coordenadas de una ciudad (lan, lon).
 * @async
 * @param {string} city - Nombre de la ciudad con mayuscula inicial.
 * @returns {Promise<object>} JSON con las cordenadas de la ciudad.
 * @throws {Error} Lanza un error si ocurre algo en la peticion.
*/
exports.getCoordinates = async (city) => {
    const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
        params: {
            q: city,
            appid: process.env.API_KEY
        }
    });
    const data = response.data[0];
    return { lat: data.lat, lon: data.lon };
};