var map = require('through2-map');
var http = require('http');

var port = process.argv[2];
var location = process.argv[3];

var server = http.createServer(function(req, res){
    //put your server code here
    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
    
});

server.listen(port);