const { getCoordinates } = require('../utils/coordinateService');
const { getWeather } = require('../utils/weatherService');

/**
 * Controlador de peticiones para obtener el clima.
 * @async
 * @param {any} req - JSON con la informacion solicitada ```(cityName)```.
 * @param {any} res - Respuesta a enviar.
 * @returns {Promise<object>} JSON con la informacion de clima de la ciudad solicitada.
 */
exports.getWeather = async (req, res) => {
    const { cityName } = req.body;

    if (!cityName) {
        return res.status(400).json({ error: 'City name field missing' });
    }

    try {
        const { lat, lon } = await getCoordinates(cityName);
        const weather = await getWeather(lat, lon);

        res.json(weather);

    } catch (error) {
        const code = error.response?.status || 500;
        res.status(code).json({ error: `${error.response?.data || error.message}` });
    }


};