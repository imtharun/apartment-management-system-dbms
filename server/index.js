const express = require("express"); //Line 1
const cors = require("cors");
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.get("/", (req, res) => {
  res.send({ hai: "Hello world" });
});

// create a GET route
app.get("/express_backend", (req, res) => {
  //Line 9
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
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

app.post("/createowner", (req, res) => {
  console.log(req.body);
  res.send({ status: req.body });
});

app.post("/bookslot", (req, res) => {
  console.log(req.body);
  res.send({ status: req.body });
});

app.post("/raisingcomplaint", (req, res) => {
  console.log(req.body);
  res.send({ status: req.body });
});
