var express = require('express');
var app = express();

var port = process.argv[2];
var filepath = process.argv[3];

app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(filepath||path.join(__dirname, '/public')));

app.listen(port);