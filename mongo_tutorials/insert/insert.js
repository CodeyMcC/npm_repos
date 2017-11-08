var firstName = process.argv[2];
var lastName = process.argv[3];

var url = 'mongodb://localhost:27017/learnyoumongo'
var MongoClient = require('mongodb').MongoClient



MongoClient.connect(url, function(err, db){
    if(err) throw err
    var collection = db.collection('docs')
    var inputs = {
        'firstName' : firstName,
        'lastName' : lastName
    }
    
    collection.insert(inputs, function(err, data){
        if(err) throw err
        console.log(JSON.stringify(inputs))
    })
    
    db.close()
    
})