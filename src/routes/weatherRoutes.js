const weatherController = require('../controllers/weatherController');

/**
 * Rutas de la aplicacion.
 * @param {Express} app - Instancia de express.
 */
exports.weatherRoutes = (app) => {
    app.post('/api/weather', weatherController.getWeather);
};