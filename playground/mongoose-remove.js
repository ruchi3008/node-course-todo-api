var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

// Todo.remove().then((res) => {
//   console.log(res);
// })

// Todo.findOneAndRemove({
//   _id : '59b894e6466f9251cf866a8a'
// }).then((res) => {
//   console.log(res);
// });

Todo.findByIdAndRemove('59b894e6466f9251cf866a8a').then((res) => {
  console.log(res);
});
