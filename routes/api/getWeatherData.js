const router = require('express').Router();
const request = require('request');
const parse = require('url-parse');
const API_KEY = '22ba3dd23a029dcd9676c949717a059e';

router.get('/getFiveDay', (req, res) => {
    const url = new parse(req.originalUrl, {}, true);
    const query = url.query;

    // OpenWeatherMap accepts different types, we need to edit the query to match that
    if(query){
        const type = query.type;
        const loc = query.loc;
        let append = 'q';
        switch(type){
            case 'city':
                append = 'q='+loc;
                break;
            case 'zip':
                append = 'zip='+loc;
                break;
            case 'latlong':
                append = loc;
        }

        const owmUrl = `http://api.openweathermap.org/data/2.5/forecast?${append}&appid=${API_KEY}`;

        request(owmUrl, (error, response, body) => {
            if(error){
                res.status(400);
                res.json({error: error});
            } else {
                res.json(JSON.parse(body));
            }
        });
    } else {
        res.status(400);
        res.json({
            error: 'Query was invalid'
        })
    }
});

module.exports = router;
