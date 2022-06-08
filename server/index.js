const express = require("express");
const bodyParser = require('body-parser');
const db = require('./mysql_connect');
const dashB = require('./routes/dashb');
const cors = require("cors")


//port number to listen
const port = 5000;

//init
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/dashboard",dashB);
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

//authorisation
app.post("/auth", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if(username &&
    username.toUpperCase().charAt(0) === "E" &&
    password &&
    password.length >= 6){

      res.send({ user: "employee" });
    }else if (
    username &&
    username.toUpperCase().charAt(0) === "A" &&
    password &&
    password.length >= 6
  ) {
    res.send({ user: "admin" });
  }else if (
    username &&
    username.toUpperCase().charAt(0) === "T" &&
    password &&
    password.length >= 6
  ) {
    res.send({ user: "tenant" });
  }else if (
    username &&
    username.toUpperCase().charAt(0) === "O" &&
    password &&
    password.length >= 6
  ) {
    res.send({ user: "owner" });
  }  else if(password.length < 6) {
    res.send({ user: "passunknown" });
  }else {
    res.send({ user: "unknown" });
  }
});


//register complaint
app.post('/raisingcomplaint',function(req,res){
    // const name = req.body.name;
    // const floorno = req.body.floorno;
    const desc = req.body.descp;
    const blockno = req.body.blockno;
    const roomno = req.body.roomno;
    const values = [,desc,blockno,roomno];
    const resul =db.registercomplaint(values,(err,result)=>{
      if(err) console.log(err);
      console.log(result);
    res.send(result);
    })
});


//creates owner in owner table
app.post('/createowner',(req,res)=>
{
  const ownerid = req.body.ownerid;
    const name = req.body.name;
    const age = req.body.age;
    const aadhar = req.body.aadhar;
    const dob = req.body.dob;
    const values = [ownerid,name,age,aadhar,dob];
    const rest = db.createowner(value,(err,result)=>{
        if(err) res.sendStatus(404);
        res.sendStatus(200);
  })
});

app.get('/tenentdetails',(req,res)=>
{
    const rest = db.getdata('samp',(err,result)=>
    {
      res.send(result);
    })
})


//books parking slot for tenents
app.post('/bookslot',(req,res)=>
{
    const vtype = req.body.vehicleType;
    const slno = req.body.slotNo;
    const values = [vtype,slno];
    const rest = db.bookslot(values,(err,result)=>{
      // if(err) console.log(err);
      // if(err) res.sendStatus(404);
      res.sendStatus(200);
  })
});

//Other routes
app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});