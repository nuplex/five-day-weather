const router = require('express').Router();

//this is a master route file, put other routes here (declutters server.js)
router.use('/api/getWeatherData/', require('./api/getWeatherData'));

module.exports = router;