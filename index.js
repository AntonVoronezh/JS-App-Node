const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const weatherRequest = require('./requests/weather.reques');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));



