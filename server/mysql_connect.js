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

// we can create a database with the name passes as an argument
// function createdb(dbname)
// {
//     let sql = 'CREATE DATABASE '+dbname;
//     con.query(sql , dbname,(err,result)=>
//     {
//         if(err)
//         {
//             throw err;
//         };
//         console.log(result);
//         let resp = 'database connected';
//         return resp;
//     })
// }


//register the complaint to the block 
function registercomplaint(values,callback)
{
  sql = 'insert into samp(block_no,descrip)values(?,?)';
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
    sql = 'insert into owner(name,age,aggrement_status,room_no)values(?,?,?,?)';
    con.query(sql,values,(err,results)=>
    {
        callback(err,results);
    })
}


//book a parking slot for the tenant
function bookslot(values,callback)
{
    sql = 'insert into parkingslot(vehicletype,slotno)values(?,?)';
    con.query(sql,values,(err,results)=>
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


module.exports = { 
    connect,
    registercomplaint,
    createowner,
    bookslot,
    getdata,
    dashboard,
    totalowner
}