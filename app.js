var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.listen(4000);

exports.closeServer = function() {
    server.close();
};
