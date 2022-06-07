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

function registercomplaint(values,callback)
{
  sql = 'insert into samp(id,descrip)values(?,?)';
  con.query(sql,values,(err,results)=>
  {
    if(err) throw err;
    callback(err,results);
  })
}

function getdata(tablename,callback)
{
    sql = 'select * from '+tablename+';';
    con.query(sql,(err,results)=>
    {
        if(err) throw err;
        callback(err,results);
    })
}


function createowner(values,callback)
{
    sql = 'insert into owner(name,age,aadhar,dob)values(?,?,?,?)';
    con.query(sql,values,(err,results)=>
    {
        if(err) throw err;
        callback(err,results);
    })
}

function bookslot(values,callback)
{
    sql = 'insert into parkingslot(vehicletype,slotno)values(?,?)';
    con.query(sql,values,(err,results)=>
    {
        if(err) throw err;
        callback(err,results);
    })
}
module.exports = { connect,registercomplaint,createowner,bookslot,getdata}