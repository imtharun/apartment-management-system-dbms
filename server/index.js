const express = require("express");
const bodyParser = require("body-parser");
// const pg = require('./postgre_connect');
// const db = require('./mysql_connect');
const dashB = require("./routes/dashb");
const cors = require("cors");

//port number to listen
const port = 5000;

//init
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/dashboard", dashB);
app.use(cors());

//initializing
app.listen(port, () => {
  console.log("Server starten to listen...");
});

//home page
app.get("/", function (req, res) {
  res.send("Only accepting GET and POST requests!");
  console.log(res);
});

app.post("/auth", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (
    username &&
    username.toUpperCase().charAt(0) === "E" &&
    password &&
    password.length >= 6
  ) {
    res.send({ user: "employee" });
  }
  if (
    username &&
    username.toUpperCase().charAt(0) === "A" &&
    password &&
    password.length >= 6
  ) {
    res.send({ user: "admin" });
  }
  if (
    username &&
    username.toUpperCase().charAt(0) === "T" &&
    password &&
    password.length >= 6
  ) {
    res.send({ user: "tenant" });
  }
  if (
    username &&
    username.toUpperCase().charAt(0) === "O" &&
    password &&
    password.length >= 6
  ) {
    res.send({ user: "owner" });
  } else {
    if (password.length < 6) {
      res.send({ user: "passunknown" });
    } else {
      res.send({ user: "unknown" });
    }
  }
});

app.post("/raisingcomplaint", function (req, res) {
  const name = req.body.name;
  const floorno = req.body.floorno;
  const desc = req.body.descp;
  const values = [name, floorno, desc];
  const resul = db.registercomplaint(values, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.send(result);
  });
});

// app.get('/dashboard',function(req,res){
//   let resdata;
//   let blockdata;
//   let ownerdata;
//   let roomdata;
//   let totalowner;
//   let tenantdata;

//   let resul =db.getdata('block',(err,result)=>{
//     if(err) console.log(err);
//     console.log(JSON.stringify(result))
//     blockdata = Object.values(JSON.parse(JSON.stringify(result)));
//   })
//   resul = db.totalowner((err,result)=>
//   {
//     if(err) console.log(err);
//     var resultArray = Object.values(JSON.parse(JSON.stringify(result))[0])[0];
//     totalowner = resultArray;
//   });
//   resul =db.getdata('owner',(err,result)=>{
//     if(err) console.log(err);
//     tenantdata = result;
//   })
//   resul =db.getdata('room',(err,result)=>{
//     if(err) console.log(err);
//     roomdata = result;
//   })
//   resul =db.getdata('tenant',(err,result)=>{
//     if(err) console.log(err);
//     tenantdata = result;
//     resdata = {
//       totalowner : totalowner,
//       block : blockdata,
//       owner : ownerdata,
//       room : roomdata,
//       tenant : tenantdata
//     }
//     res.send(resdata);
//   })

// });

//creates owner in owner table
app.post("/createowner", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const aadhar = req.body.aadhar;
  const dob = req.body.dob;
  const values = [name, age, aadhar, dob];
  const rest = db.createowner(value, (err, result) => {
    if (err) res.sendStatus(404);
    res.sendStatus(200);
  });
});

app.get("/tenentdetails", (req, res) => {
  const rest = db.getdata("samp", (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//books parking slot for tenents
app.post("/bookslot", (req, res) => {
  const vtype = req.body.vehicleType;
  const slno = req.body.slotNo;
  const values = [vtype, slno];
  console.log(values);
  const rest = db.bookslot(values, (err, result) => {
    if (err) console.log(err);
    //if(err) res.sendStatus(404);
    res.sendStatus(200);
  });
});

//Other routes
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});
