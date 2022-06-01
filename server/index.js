const express = require("express");
var db = require('./sql_connect');
const { stringify } = require("querystring");
const { assert } = require("console"); 
const bodyParser = require('body-parser');



//port number to listen
let port = 3000;

//connects to database in the beginning
db.connect();

//init
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



//initializing
app.listen(port,()=>{
  console.log("Server starten to listen...");
});


//home page
app.get('/', function(req, res){
  res.send("Hello world!");
});

//calls create databses function
// app.get('/createdb',(req, res)=>
// {
//   const dbname = 'jssample';
//   db.createdb(dbname)
//   res.send('dbcreated');
// });



//insert values into table using post method
app.post('/insertvalues', function (req, res) {  
  console.log('Got body:', req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  res.sendStatus(200);
}) 


//To fetch all data from table using table name
app.get('/result/:tbname', function(req, res){
  const table_name = req.params.tbname;
  const result = db.fetchalldata(table_name,(err,result)=>{
    console.log(result);
    res.send(result);
  })
});


//returns table values
app.get('/fetchdata',async (req,res)=>
{
  var result = db.fetchalldata('name',(err,result) => {
    console.log(result);
    res.send(result);
  }) 
});


//Other routes
app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});