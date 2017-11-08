var url = 'mongodb://localhost:27017/learnyoumongo'
var path = 'prices'
var size = process.argv[2]


var MongoClient = require('mongodb').MongoClient



MongoClient.connect(url, function(err, db){
    if(err) throw err
    var collection = db.collection(path)
    
    
    collection.aggregate([
        { $match: {size: size}},
        { $group: {
            _id: 'total',
            total:    {$avg: '$price'}}}
            ]).toArray(function(err, results){
                if(err) throw err
                console.log(Number(results[0].total).toFixed(2))
                db.close()
            })
})

        