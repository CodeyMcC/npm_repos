var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var location = process.argv[3];

var server = http.createServer(function(req, res){
    //put your server code here
    var src = fs.createReadStream(location);
    src.pipe(res);
    
});

server.listen(port);