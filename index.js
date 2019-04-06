const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const weatherRequest = require('./requests/weather.reques');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (rec, res) => {
    res.render('index', {weather:null , error: null});
})

app.post('/', async (rec, res) => {
    const {city} = rec.body;
    const {weather, error} = await weatherRequest(city);
    
    res.render('index', {weather, error});
})

