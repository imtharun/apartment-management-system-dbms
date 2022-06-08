const mysql = require('mysql');
const config = require('./config_sql');
const con = mysql.createConnection({
    host: config.host,
    user: config.uname,
    password: config.upass,
    database: config.database
});
connect();
//used to establish connection with the database
function connect()
{
    con.connect(function(err) 
    {
        if (err) throw err;
        console.log("database Connected!");
    });
}

//register the complaint to the block 
function registercomplaint(values,callback)
{
  sql = ' update block set complaints= ? where block_no = ? and roomno= ?';
  con.query(sql,values,(err,results)=>
  {
      if (err)
      {
          console.log(err);
      }
    callback(err,results);
  })
}


function totalowner(callback)
{
    sql = 'SELECT COUNT(owner_id) FROM owner';
    con.query(sql,(err,results)=>
    {
        callback(err,results);
    })
}

//get all the data from the table using table name
function getdata(tablename,callback)
{
    sql = 'select * from '+tablename+';';
    con.query(sql,(err,results)=>
    {
        callback(err,results);
    })
}


//add an owner tuple to the table
function createowner(values,callback)
{
    sql = 'insert into owner values(?,?,?,?,?,?)';
    con.query(sql,values,(err,results)=>
    {
        callback(err,results);
    })
}

function createownerproof(values,callback)
{
    sql = 'insert into identity values(?,?,null);';
    con.query(sql,values,(err,results)=>
    {
        callback(err,results);
    })
}


//book a parking slot for the tenant
function bookslot(values,callback)
{
    sql = 'update room set parking_slot =  ? where room_no = ?';
    con.query(sql,values,(err,results)=>
    {
        callback(err,results);
    })
}


function viewcomplaints(callback)
{
    sql = 'select * from oo;';
    con.query(sql,(err,results)=>
    {
        callback(err,results);
    })
}


function dashboard(callback)
{
    sql = 'select * from block';
    con.query(sql,(err,results)=>
    {
        callback(err,results);
    })
}

function totaltenant(callback)
{
    sql = 'SELECT COUNT(tenant_id) FROM tenant';
    con.query(sql,(err,results)=>
    {
        callback(err,results);
    })
}

function totalemployee(callback)
{
    sql = 'SELECT COUNT(emp_id) FROM employee';
    con.query(sql,(err,results)=>
    {
        callback(err,results);
    })
}

function totalcomplaint(callback)
{
    sql = 'SELECT COUNT(complaints) FROM block';
    con.query(sql,(err,results)=>
    {
        callback(err,results);
    })
}


function authoriseuser(username,password,callback)
{
    let results;
    sql = 'SELECT passowrd from auth where user_id = ?';
    const value = [username];
    con.query(sql,value,(err,result)=>
    {
        console.log(result);
        if(result.length===0)
        {
            results = "denied";
            callback(err,results);
            return;
        }
        var resultArray = Object.values(JSON.parse(JSON.stringify(result))[0])[0];
        if(password === resultArray)
        {
            results = "granted";
            console.log("fuck");
        }
        else
        {
            results = "denied";
        }
        callback(err,results);
    })
}


module.exports = { 
    connect,
    registercomplaint,
    createowner,
    bookslot,
    getdata,
    dashboard,
    totalowner,
    totaltenant,
    totalemployee,
    totalcomplaint,
    createownerproof,
    viewcomplaints,
    authoriseuser
}