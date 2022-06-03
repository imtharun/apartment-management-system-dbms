const express = require("express");
const bodyParser = require('body-parser');
const pg = require('./postgre_connect');

//port number to listen
let port = 3000;

//connects to database in the beginning

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


//insert values into table using post method
app.post('/insertvalues', function (req, res) {  
  // console.log('Got body:', req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  const uname = req.body.username;
  const uage = req.body.password;
  let name = [uname,uage];
  const rest = pg.insertintotable(name,(err,result)=>{
    if(err) throw err;
    res.sendStatus(200);
  })
}) 


//To fetch all data from table using table name
app.get('/result/:tbname', function(req, res){
  const table_name = req.params.tbname;
  const result = pg.fetchalldata(('demoscheme.'+table_name),(err,result)=>{
    console.log(result);
    res.send(result.rows);
  })
});


//returns table values
app.get('/fetchdata',(req,res)=>
{
  const rest = pg.fetchalldata('demoscheme.demotable',(err,result)=>{
    console.log(result);
    res.send(result.rows);
  })
});


//Other routes
app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});