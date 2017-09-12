var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');
var {ObjectID} = require('mongodb');
var id = '49b72e3778674754ffdcd992';

// Todo.find().then((todos) => {
//   console.log('todos',todos);
// });

// Todo.find({
//   _id : id
// }).then((todo) => {
//   console.log('todo',todo);
// });

// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('todo',todo);
// });
// if(!ObjectID.isValid(id)){
//   console.log('Invalid ID');
// }else{
//   Todo.findById({
//     _id : id
//   }).then((todo) => {
//     if(!todo){
//       return console.log('Id not found');
//     }
//     console.log('todo',todo);
//   });
// }

User.findById('59b717f4c12bd83db5029602').then((user) => {
  if(!user){
    console.log('Not found');
  }
    console.log(user);
}).catch((e) => console.log(e));
