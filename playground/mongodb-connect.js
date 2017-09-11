//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db) => {
  if(err){
    return console.log('We were unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
//   db.collection('ToDos').insertOne({
//     text:'Get a job',
//     completed: false
//   },(err,result)=>{
//     if(err){
//       return console.log('Unabble to insert todo',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
//   });
db.collection('User').insertOne({
  name : 'Ayushi',
  age : 16,
  location : 'Lucknow'
},(err,result) => {
  if(err){
    return console.log('Unable to insert user',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});


  db.close();
});
