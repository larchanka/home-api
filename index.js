'use strict';

const express = require('express');
const app = express();

// routes
const Forecast = require('./routes/forecast');
const News = require('./routes/news');

const packageData = require('./package.json');

const port = process.env.PORT || 3000;

app.use(express.static('static'));

app.get('/healthcheck', (req, res) => {
  res.send('I am healthy. My version is ' + packageData.version);
});

app.get('/forecast', Forecast);
app.get('/news', News);

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
});
