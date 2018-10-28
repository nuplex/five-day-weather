const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 32278; //on a dialpad, this is 'F C A S T' (forecast)

//routes is where the api calls will exist
app.use(require('./routes'));

//get compiled assets from the build folder
app.use('/', express.static(path.join(__dirname, './build')));
app.use('/*', express.static(path.join(__dirname, './build')));

//start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});