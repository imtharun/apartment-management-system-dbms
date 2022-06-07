const express = require("express");

const bodyParser = require("body-parser");
const pg = require("./postgre_connect");
const insertInto = require("./routes/insertinto");
const cors = require("cors");

const bodyParser = require("body-parser");
// const pg = require('./postgre_connect');
const db = require("./mysql_connect");
const insertInto = require("./routes/insertinto");
const cors = require("cors");

//port number to listen
const port = 5000;

//init
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/insertinto", insertInto);
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
  console.log(req.body);
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

app.get("/complaint", function (req, res) {
  res.send("Complaint registered");
});
/*
//insert values into table using post method
app.post('/insertvalues', function (req, res) {  
  // console.log('Got body:', req.body);
  const uname = req.body.username;
  const uage = req.body.password;
  let name = [uname,uage];
  const rest = pg.insertintotable(name,(err,result)=>{
    if(err) throw err;
    res.sendStatus(200);
  })
}) 
*/

//To fetch all data from table using table name
app.get("/result/:tbname", function (req, res) {
  const table_name = req.params.tbname;
  const resul = pg.fetchalldata(table_name, (err, result) => {
    res.send(result.rows);
  });
});

//returns table values
app.get("/fetchdata", (req, res) => {
  const rest = pg.fetchalldata("demotable", (err, result) => {
    res.send(result.rows);
  });
});

app.get("/raisingcomplaint", function (req, res) {
  const name = req.body.name;
  const floorno = req.body.floorno;
  const desc = req.body.descp;
  const values = [name, floorno, desc];
  const resul = db.registercomplaint(values, (err, result) => {
    res.send(result.rows);
  });
});

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
    //if(err) res.sendStatus(404);
    res.sendStatus(200);
  });
});

//Other routes
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});
