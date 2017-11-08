var http = require('http');
var i = 2;

var final = 0;

var array = ['','',''];
    
function getIt (url, i){
http.get(url, function(res){
    res.setEncoding('utf8');
    
  res.on('data', function(data){
     
     
     array[i] += data.toString();
  });
  res.on('end', function(){
    final ++;
    if (final == 3){
        printMe();
    }
  });
}).on('error', function(e){
    console.log("Error: " + e);
});
};


for (i==i; i<5;i++){
    var url = process.argv[i];
    getIt(url, i-2);
    
    
}


function printMe(){
    console.log(array[0]);
        console.log(array[1]);
            console.log(array[2]);
}