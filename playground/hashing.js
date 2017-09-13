const jwt = require('jsonwebtoken');
const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10,(err,salt) => {
//   bcrypt.hash(password,salt,(err,hash) =>{
//     console.log(hash);
//   });
// });

bcrypt.compare('123abc','$2a$10$1498P8WIZT2wn6S7DHeoA.Of2hvNQcs7Di8.sKWYcI5AmX4eo/u1y',(err,res)=>{
  console.log(res);
});
// var msg = 'I am stupid';
// var hash = SHA256(msg);
// console.log(`${msg}`);
// console.log(`${hash}`);
//
// var data ={
//   id:4
// };
//
// var token = jwt.sign(data,'123abc');
// console.log(`${token}`);
//
// var data = jwt.verify(token,'123abc');
// console.log(data);
