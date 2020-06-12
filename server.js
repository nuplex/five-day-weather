const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV;
const listen = env === 'production' ? `0.0.0.0:8080`:port;

//routes is where the api calls will exist
app.use(require('./routes'));

//get compiled assets from the build folder
app.use('/', express.static(path.join(__dirname, '/build')));
app.use('/*', express.static(path.join(__dirname, '/build')));

//start the server
app.listen(listen, () => {
    console.log(`Server is listening on port ${port}`);
});