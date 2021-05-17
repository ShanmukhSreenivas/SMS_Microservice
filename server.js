'use strict'

require("./db");

const express = require("express");

const app = express();

var routes = require('./api/routes');

const port = process.env.PORT || 3000;

app.use(express.json());

routes(app);

app.get('/', (req, res) => {
    res.send("SMS Microservice. Refer provided documentation for usage.");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app
