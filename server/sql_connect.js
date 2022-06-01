var mysql = require('mysql');
var config = require('./config_sql');
var con = mysql.createConnection({
    host: config.host,
    user: config.uname,
    password: config.upass,
    database: 'jssample'
});

//used to establish connection with the database
function connect()
{
    con.connect(function(err) 
    {
        if (err) throw err;
        console.log("database Connected!");
    });    

};

// we can create a database with the name passes as an argument
function createdb(dbname)
{
    let sql = 'CREATE DATABASE '+dbname;
    con.query(sql , dbname,(err,result)=>
    {
        if(err)
        {
            throw err;
        };
        console.log(result);
        let resp = 'database connected';
        return resp;
    })
};

function fetchalldata(name,callback) {
    const sql = 'SELECT * FROM '+name+';';
    const query = con.query(sql,(err,rows,fields) => {
    if(err) throw err;
    callback(err, rows); // USING CALLBACK
    });
};

module.exports = { connect, createdb,con ,fetchalldata}