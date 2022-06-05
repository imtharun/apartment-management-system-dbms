const Pool = require('pg').Pool
const config = require('./config_sql');
const pool = new Pool({
  user: config.pgname,
  host: 'localhost',
  database: 'demo',
  password: config.pgpass,
  port: 5432,
})
const scheme = 'demoscheme.';


//to fetch all data from a given table
function fetchalldata(tname,callback) {
  pool.query('SELECT * FROM '+scheme+tname+ ' ORDER BY id ASC', (error, results) => {
    if(error) throw error;
    callback(error,results);
  })
};

//able to insert into table
function insertintotable(values,callback)
{
  sql = 'INSERT INTO '+scheme+table+'(name, age) VALUES($1, $2)';
  //const values = [name,age];
  pool.query(sql,values,(err,results)=>{
    if(err) throw err;
    callback(err, results);
  })
}

//able to insert into tenant table
function insertintotenant(values,callback)
{
  sql = 'INSERT INTO demoscheme.tenant(tenant_id,password,dob,name,proof) VALUES($1, $2, $3, $4, $5)';
  //const values = [name,age];
  pool.query(sql,values,(err,results)=>{
    if(err) throw err;
    callback(err, results);
  })
}

//able to insert into employees table
function insertintoemoloyees(values,callback)
{
  sql = 'INSERT INTO demoscheme.employees(emp_id,emp_name,salary,emp_type,age,block_no) VALUES($1, $2, $3, $4, $5, $6)';
  //const values = [name,age];
  pool.query(sql,values,(err,results)=>{
    if(err) throw err;
    callback(err, results);
  })
}

//able to insert into block_admin table
function insertintoblock_admin(values,callback)
{
  sql = 'INSERT INTO demoscheme.block_admin(admin_id,admin_name,admin_pass,block_no) VALUES($1, $2, $3, $4)';
  //const values = [name,age];
  pool.query(sql,values,(err,results)=>{
    if(err) throw err;
    callback(err, results);
  })
}

//able to insert into room table
function insertintoroom(values,callback)
{
  sql = 'INSERT INTO demoscheme.room(room_no,type,floor,parking_slot,reg_no,block_no) VALUES($1, $2, $3, $4, $5, $6)';
  //const values = [name,age];
  pool.query(sql,values,(err,results)=>{
    if(err) throw err;
    callback(err, results);
  })
}

//able to insert into owner table
function insertintoowner(values,callback)
{
  sql = 'INSERT INTO demoscheme.owner(owner_id,room_no,name,age,password,proof,aggrement_Status,lives_in) VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
  //const values = [name,age];
  pool.query(sql,values,(err,results)=>{
    if(err) throw err;
    callback(err, results);
  })
}

//able to insert into block table
function insertintoblock(values,callback)
{
  sql = 'INSERT INTO demoscheme.block(block_no,block_name,complaints) VALUES($1, $2, $3)';
  //const values = [name,age];
  pool.query(sql,values,(err,results)=>{
    if(err) throw err;
    callback(err, results);
  })
}

//able to insert into rental table
function insertintorental(values,callback)
{
  sql = 'INSERT INTO demoscheme.rental(date_of_joining,monthly_rent,tenant_id,room_no) VALUES($1, $2, $3, $4)';
  //const values = [name,age];
  pool.query(sql,values,(err,results)=>{
    if(err) throw err;
    callback(err, results);
  })
}


module.exports = 
{ 
  fetchalldata,
  insertintotable ,
  insertintoroom,
  insertintoblock,
  insertintoblock_admin,
  insertintoemoloyees,
  insertintoowner,
  insertintorental,
  insertintotenant 
}