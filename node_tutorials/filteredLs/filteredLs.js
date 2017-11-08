
var fs = require('fs');

var path = process.argv[2];
var bufStr = undefined;
var finalLs = [];
var result = undefined;

function readFile(callback){
    
fs.readdir(path, function doneReading(err, list){
    if(err){console.log("Error");}else{
 bufStr = list.toString().split(",");
 
 for (var i = 0; i<bufStr.length; i++){
     var fileLen = process.argv[3].length;
     var entryLen = bufStr[i].length;
     var fileType = bufStr[i].slice(entryLen - fileLen, entryLen);
  
  if(fileType!==process.argv[3]){continue;}
  else if(fileLen==entryLen){continue;}
  else{
     finalLs.push(bufStr[i]); 
    result =  finalLs.join("\n");
  }   
  }
 
 




callback();}
});
}

function logMyAnswer(){
    
console.log(result);

}


readFile(logMyAnswer);

