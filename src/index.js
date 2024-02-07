var express = require('express');
var load = require('express-load');
var app = express();
var path = require('path');
var router = express.Router();

var host = 'localhost';
var port = 88;

load('/src/pages').into(app);

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/home.html'));
});

router.get('/contato/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/contato.html'));
});

router.get('/contato/nike', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/contato.html'));
});


app.use(router);

app.listen(3333, function () {
    console.log('rodando');
})

/* var server = http.createServer(function (req, res) {
    res.setHeader('Content-type', 'text/plain');
    res.end('Chris Axxwell');
})

server.listen(port, hostname, function () {
    console.log('Start Server');
}); */


