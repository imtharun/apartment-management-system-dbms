const express = require("express");
const bodyParser = require('body-parser');
// const pg = require('./postgre_connect');
const db = require('./mysql_connect');
const insertInto = require('./routes/insertinto');
const cors = require("cors")


//port number to listen
const port = 5000;

//init
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/insertinto",insertInto);
app.use(cors())


//initializing
app.listen(port,()=>{
  console.log("Server starten to listen...");
}); 

//home page 
app.get('/', function(req, res){
  res.send("Only accepting GET and POST requests!");
  console.log(res)
});


app.post("/auth", (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    if (username && username.toUpperCase().charAt(0) === "E") {
      res.send({ user: "employee" });
    }
    if (username && username.toUpperCase().charAt(0) === "A") {
      res.send({ user: "admin" });
    }
    if (username && username.toUpperCase().charAt(0) === "T") {
      res.send({ user: "tenant" });
    }
    if (username && username.toUpperCase().charAt(0) === "O") {
      res.send({ user: "owner" });
    }
});

app.get('/raisingcomplaint',function(req,res){
    const name = req.body.name;
    const floorno = req.body.floorno;
    const desc = req.body.descp;
    const values = [name,floorno,desc];
    const resul =db.registercomplaint(values,(err,result)=>{
    res.send(result.rows);
    })
});

//creates owner in owner table
app.post('/createowner',(req,res)=>
{
    const name = req.body.name;
    const age = req.body.age;
    const aadhar = req.body.aadhar;
    const dob = req.body.dob;
    const values = [name,age,aadhar,dob];
    const rest = db.createowner(value,(err,result)=>{
        if(err) res.sendStatus(404);
        res.sendStatus(200);
  })
});

app.get('/tenentdetails',(req,res)=>
{
    const rest = db.getdata('samp',(err,result)=>
    {
        console.log(result);
        res.send(result);
    })
})


//books parking slot for tenents
app.post('/bookslot',(req,res)=>
{
    const vtype = req.body.vehicleType;
    const slno = req.body.slotNo;
    const values = [vtype,slno];
    console.log(values);
    const rest = db.bookslot(values,(err,result)=>{
        //if(err) res.sendStatus(404);
        res.sendStatus(200);
  })
});

//Other routes
app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});