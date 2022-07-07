const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
// const config =  require('../config');

//const uri =`mongodb://localhost/${config.MONGO_DATABASE}`
const uri =`mongodb+srv://sersenlinea:sersenlinea@cluster0.amioq.mongodb.net/sersenlinea`;
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(db =>console.log('conectamos la base de datos'))
.catch((err)=>{
  console.log(err)
})