var http = require('http');
var port = process.argv[2];
var url = require('url');

var hours = 0;
var mins = 0;
var secs = 0;

var server = http.createServer(function(req, res){
    //server code goes here
    if(req.method !== 'GET'){
        return "Get me a Get request";
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    var output = (url.parse(req.url,true));

    var ISOstamp = output.query.iso;
   
   
   function dateSplitter(date){
       hours = date.substring(11,13);
        mins = date.substring(14,16);
        secs = date.substring(17,19);
   };

    
   dateSplitter(ISOstamp);

     if(output.pathname =='/api/parsetime'){
        res.write(
        JSON.stringify(
            {hour :  Number(hours),
            minute: Number(mins),
            second: Number(secs)
      }))
         
     } else {
         var date = new Date(ISOstamp);
      
      res.write(JSON.stringify({
          unixtime: date.getTime()
          }));
     };
    

   res.end(); 
});

server.listen(port);