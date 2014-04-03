var express = require('express');

var app = express();

var mensajes = [];

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/mensaje/new/:mensaje', function (req, res) {
    mensajes.push(req.params.mensaje)
    res.send('Tu mensaje fue: ' + req.params.mensaje);
});

app.get('/mensajes/', function (req, res) {
    res.send(mensajes);
});

app.get('/mensajes', function (req, res) {
    res.send('Tu mensaje fue: ' + req.params.mensaje);
});

app.listen(3000);
console.log('app working');