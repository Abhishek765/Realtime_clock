var express = require('express');
var app = express();

var port = 8080;
// app.use(''express.static(__dirname + '/clock.html'));
app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Starting server at' + port);