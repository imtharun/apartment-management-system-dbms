const express = require("express");
var db = require('./sql_connect');
const { stringify } = require("querystring");
const { assert } = require("console");

//port number to listen
let port = 3000;

//connects to database in the beginning
db.connect();

const app = express();

//initializing
app.listen(port,()=>{
  console.log("Server starten to listen...");
});

//home page
app.get('/', function(req, res){
  res.send("Hello world!");
});

//calls create databses function
app.get('/createdb',(req, res)=>
{
  let dbname = 'jssample';
  db.createdb(dbname)
  res.send('dbcreated');
});


//Other routes
app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});
