var express = require('express');
var app = express();
var fs = require('fs');

var port = process.argv[2];
var filepath = process.argv[3];
var output = ''

fs.readFile(filepath, function(err, data){
   if(err){throw err;}
   
   output = JSON.parse(data)

});

app.use('/books', function(req, res){
   res.json(output); 
});


app.listen(port);