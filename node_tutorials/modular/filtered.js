var fs = require('fs');

    
    
module.exports = function readFile(dirName, extName, callback){

    var bufStr = undefined;
    var finalLs = [];
    var result = undefined;

    
        
    fs.readdir(dirName, function (err, list){
        if(err){return callback(err);}else{


     bufStr = list.toString().split(",");
     
     for (var i = 0; i<bufStr.length; i++){
         var fileLen = extName.length;
         var entryLen = bufStr[i].length;
         var fileType = bufStr[i].slice(entryLen - fileLen, entryLen);
      
      if(fileType!==extName){continue;}
      else if(fileLen==entryLen){continue;}
      else{
         finalLs.push(bufStr[i]); 
        
      }   
      }
        

    callback(null, finalLs);}
    });
    

    

}