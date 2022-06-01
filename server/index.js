const express = require("express");
var db = require('./sql_connect');
var con = db.con;
const { stringify } = require("querystring");
const { assert } = require("console");

//port number to listen
let port = 3000;

//connects to database in the beginning
connect();

const app = express();


function callerr(callback) {
  const sql = 'SELECT * FROM name;';
  const query = con.query(sql,(err,rows,fields) => {
  if(err) throw err;
  callback(err, rows); // USING CALLBACK
  });
}



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
  const dbname = 'jssample';
  db.createdb(dbname)
  res.send('dbcreated');
});



//returns table values
// app.get('/fetchdata',async (req,res)=>
// {
//   let sql = 'SELECT * FROM name;';
//   let query =  con.query(sql,(err,rows,fields)=>
//   {
//     if(err){
//       throw err;
//     } 
//     console.log(rows);
//     res.send(rows);
//   })
// });

app.get('/samp',async(req, res)=>
{
  var result = callerr((err,result) => {
  console.log(result);
  res.send(result);
  return res;
})  
});

//Other routes
// app.get('*', function(req, res){
//   res.send('Sorry, this is an invalid URL.');
// });


function connect()
{
  con.connect(function(err) 
  {
    if (err) throw err;
    console.log("database Connected!");
  });    

}



// console.log(caller("tenet"));



// const b = caller('name');