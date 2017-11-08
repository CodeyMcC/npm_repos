var port = process.argv[2];
var filepath = process.argv[3];

var express = require('express');
var app = express();

app.set('views', filepath||path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get("/home", function(req, res){
    res.render('index', {date: new Date().toDateString()});    
})

app.listen(port);