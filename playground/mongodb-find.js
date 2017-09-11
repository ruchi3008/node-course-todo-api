//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db) => {
  if(err){
    return console.log('We were unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('ToDos').find({
  //   _id:new ObjectID('59b6f5b8f4e1d2dbb9aa1f88')
  //   }).toArray().then((docs)=>{
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to retrieve from Todos Collection',err);
  // });

  // db.collection('ToDos').find().count().then((count)=>{
  //   console.log('ToDos');
  //   console.log(`Number of documents ${count}`);
  // },(err) => {
  //   console.log('Unable to retrieve from Todos Collection',err);
  // });

  db.collection('User').find({
    name :'Ruchi'
  }).toArray().then((result) =>{
    console.log("User");
    console.log(JSON.stringify(result,undefined,2));
  },(err) =>{
    console.log('Unable to fetch user data',err);
  });

//  db.close();
});
