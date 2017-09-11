//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db) => {
  if(err){
    return console.log('We were unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('ToDos').deleteOne({text :'Eat lunch'}).then((results)=>{
  //   console.log(results);
  // },(err) =>{
  //   if(err){
  //   console.log('Unable to delete from ToDos',err);
  //   }
  // });
  // db.collection('ToDos').deleteMany({text : 'Eat lunch'}).then((results) =>{
  //   console.log(results);
  // },(err) =>{
  //   console.log('Unable to remove from ToDos',err);
  // });

  // db.collection('ToDos').findOneAndDelete({completed : true}).then((result) =>{
  //   console.log(result);
  // },(err) =>{
  //   console.log('Unable to remove from ToDos',err);
  // });
  // db.collection('User').deleteMany({name :'Josh'}).then((result) =>{
  //   console.log("Data deleted");
  // },(err) =>{
  //   console.log('Unable to delete from User Collection');
  // });

  db.collection('User').findOneAndDelete({
    _id : new ObjectID('59b6f91aafa5392752a4f5cb')
  }).then((result) =>{
    console.log(result);
  },(err) => {
    console.log('Unable to remove from User Collection',err);
  });
  //db.close();
});
