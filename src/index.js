const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 3002;

/**
 * Require dos meus controllers
 */
consign().include('/src/Controller').into(app);


app.listen(port, () => {
    console.log(`Port is run in ${port}`);
});