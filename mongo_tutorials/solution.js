var url = 'mongodb://localhost:27017/learnyoumongo'


var mongo = require('mongodb').MongoClient
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      
      var collection = db.collection('parrots');
      collection.find({
          age: {$gt: parseInt(process.argv[2])}
      }).toArray(function(err, documents){
          console.log(documents);
    db.close();
      })
    
        
    })
    
    