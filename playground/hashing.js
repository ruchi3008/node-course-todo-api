const jwt = require('jsonwebtoken');
const {SHA256} = require('crypto-js');
var msg = 'I am stupid';
var hash = SHA256(msg);
console.log(`${msg}`);
console.log(`${hash}`);

var data ={
  id:4
};

var token = jwt.sign(data,'123abc');
console.log(`${token}`);

var data = jwt.verify(token,'123abc');
console.log(data);
