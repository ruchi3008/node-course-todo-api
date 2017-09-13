require('./config/config.js');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();
var port = process.env.PORT;

app.use(bodyParser.json());
app.post('/todos',(req,res) => {
    var newTodo = new Todo({
      text : req.body.text
    });
    newTodo.save().then((result) => {
      res.send(result);
    },(err) => {
      res.status(400).send(err);
    });
});

app.get('/todos',(req,res) =>{
  Todo.find().then((result) => {
    res.send({result});
  },(err) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res) => {
  if(!ObjectID.isValid(req.params.id)){
    return res.status(404).send();
  }
  Todo.findById(req.params.id).then((todo) => {
    if(!todo){
      res.send(404).send();
    }
    res.send({todo});
  }).catch((e) => res.status(400).send());
});

app.delete('/todos/:id',(req,res) => {
  if(!ObjectID.isValid(req.params.id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(req.params.id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send(todo);
  }).catch((e) => {
    res.status(400).send();
  });
});

app.patch('/todos/:id',(req,res) => {
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo) =>{
    if(!todo){
      res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.post('/user',(req,res) => {
  var body =_.pick(req.body,['email','password']);
  var newUser = new User(body);
  newUser.save().then(() => {
    return newUser.generateAuthToken();
  }).then((token) =>{

    res.header('x-auth',token).send(newUser.toJSON());
  }).catch((e) => {

    res.status(400).send(e);
  });
});

app.get('/users/me',authenticate,(req,res) => {
res.send(req.user);
});

app.listen(port,() => {
  console.log(`Server started on ${port}`);
});


module.exports ={app};
