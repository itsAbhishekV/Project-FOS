const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb+srv://dhruv:dhruv@cluster0.10txfn8.mongodb.net/?retryWrites=true&w=majority";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url ).then((client) =>{
        _db  = client.db('project-fos');
        console.log("Database connected!");
    }).catch((err) => {return callback(err)})
  },

  getDb: function() {
    return _db;
  }
};