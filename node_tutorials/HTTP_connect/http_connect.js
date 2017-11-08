var http = require('http');

var url = process.argv[2];


http.get(url, function(res){
    res.setEncoding('utf8');
    
    var str = '';
    var num_char = 0;
    
  res.on('data', function(data){
     num_char += data.length
     str = str + data.toString();
     
  });
  res.on('end', function(){
      console.log(num_char);
      console.log(str);
      
  });
}).on('error', function(e){
    console.log("Error: " + e);
});