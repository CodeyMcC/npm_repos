

var url = 'mongodb://localhost:27017/' + process.argv[2]
var MongoClient = require('mongodb').MongoClient



MongoClient.connect(url, function(err, db){
    if(err) throw err
    var collection = db.collection('users')
    var userName = {username: "tinatime"} 
    var updateField = {age: 40}
    
    collection.update(userName, {$set: updateField}, function(err, data){
        if(err) throw err
      console.log('something')  
    db.close()
    
    })
})