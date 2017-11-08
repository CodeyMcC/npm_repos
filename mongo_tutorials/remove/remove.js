
var url = 'mongodb://localhost:27017/learnyoumongo'
var path = 'parrots'
var id = process.argv[4]

var MongoClient = require('mongodb').MongoClient



MongoClient.connect(url, function(err, db){
    if(err) throw err
    var collection = db.collection(path)
    
    collection.count({age: {$gt: parseInt(process.argv[2])}}, function(err, data){
        if(err) throw err
      
    db.close()
    
    })
})