var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var dbName = 'eration';
var collectionName = 'users';

module.exports.uesrRepository = {
    userList : function(callback){
        MongoClient.connect(url, function(err, db){
            if(err){
                callback(err, null);
            }
            else{
                var dbo = db.db(dbName);
                var query = {};
                dbo.collection(collectionName).find(query).toArray(function(err, result){
                    if(err){
                        callback(err, null);
                    }
                    else{
                        console.log(result);
                        db.close();
                        callback(null,result);
                    }
                });
            }
        });
    }
};