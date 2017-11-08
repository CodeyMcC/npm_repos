var mod = require('./filtered');

var callback = function(err, data){
    if(err){
        return console.error(err)
    } else {
        console.log(data.join("\n"))
            }
}

mod(process.argv[2], process.argv[3], callback);