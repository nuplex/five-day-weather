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
                append = (() => {
                    //quick parsing
                    let latlong = '';
                    const latlonRE = /([+-]?[0-9]{1,3}(?:\.[0-9]+)?)/g;
                    const matches = loc.match(latlonRE);
                    if(matches.length < 2){
                        latlong ='__EXIT_L'
                    } else {
                        /* OWM is NOT a fan of the '+', it will sometimes take it
                         * and other times it will not. This is true even for
                         * identical inputs!
                         *
                         * Issue discussed more in README.md, in 'Other Issues'
                         *
                         * This is not a surefire solution
                         */
                        const lat = matches[0].replace('+','');
                        const lon = matches[1].replace('+','');
                        latlong = `lat=${lat}&lon=${lon}`
                    }

                    return latlong;
                })();
        }

        if(append !== '__EXIT_L') {
            const owmUrl = `http://api.openweathermap.org/data/2.5/forecast?${append}&appid=${API_KEY}`;

            request(owmUrl, (error, response, body) => {
                if (error) {
                    res.status(400);
                    res.json({error: error});
                } else {
                    res.json(JSON.parse(body));
                }
            });
        } else {
            res.status(400);
            res.json({
                error: 'Lat-Long was not formatted properly'
            });
        }
    } else {
        res.status(400);
        res.json({
            error: 'Query was invalid'
        })
    }
});

module.exports = router;
