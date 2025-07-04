const express = require('express');
const app = express();

require('dotenv').config();

// Middlewares
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

// Rutas
const { weatherRoutes } = require('./routes/weatherRoutes');

weatherRoutes(app)

app.listen(process.env.PORT, () => {
    console.log('Server is on!');
})