
var fs = require('fs');

var path = process.argv[2];
var matchNum = undefined;

function readFile(callback){
    
fs.readFile(path, function doneReading(err, fileContents){
    
var bufStr = fileContents.toString();
matchNum = bufStr.match(/\n/g);


callback();
});
}

function logMyAnswer(){
console.log(matchNum.length);    
}


readFile(logMyAnswer);



