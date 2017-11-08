
var url = 'mongodb://localhost:27017/learnyoumongo'
var path = 'parrots'


var MongoClient = require('mongodb').MongoClient



MongoClient.connect(url, function(err, db){
    if(err) throw err
    var collection = db.collection(path)
    
    collection.count({age: {$gt: parseInt(process.argv[2])}}, function(err, count){
        if(err) throw err
      console.log(count)
    db.close()
    
    })
})