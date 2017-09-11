//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db) => {
  if(err){
    return console.log('We were unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('ToDos').findOneAndUpdate({
  //   _id : new ObjectID('59b6f5b8f4e1d2dbb9aa1f88')
  // },{
  //   $set: {
  //     completed : true
  //   }
  // },{
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // });
  // db.collection('User').findOneAndUpdate({
  //   name : 'Rahul'
  // },{
  //   $set :{
  //     name :'Gaurav'
  //   }
  // },{
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('User').findOneAndUpdate({
    name :'Ruchi'
  },{
    $inc :{
      age : 20
    }
  },{
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  })
  //db.close();
});
