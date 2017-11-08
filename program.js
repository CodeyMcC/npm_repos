

var fs = require('fs');

var path = process.argv[2];

var buf = fs.readFileSync(path);

var bufStr = buf.toString();

var matchNum = bufStr.match(/\n/g);

console.log(matchNum.length);

