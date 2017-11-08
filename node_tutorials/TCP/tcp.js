var net = require('net');

var port = process.argv[2];

var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();

if(month<10){
    month = "0"+month;
}
if (day<10){
    day = "0"+day;
}

var hours = date.getHours();
var mins = date.getMinutes();
var secs = date.getSeconds();

if (hours<10){
    hours = "0"+hours;
}
if(mins<10){
    mins = "0"+mins;
}
var timestamp = year+"-"+month+"-"+day+" "+hours+":"+mins


var server = net.createServer(function(socket){
    //socket handling logic
    socket.write(timestamp +"\n");
    socket.end();
});

server.listen(port);
