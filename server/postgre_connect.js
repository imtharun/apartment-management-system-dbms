const Pool = require('pg').Pool
const config = require('./config_sql');
const pool = new Pool({
  user: config.pgname,
  host: 'localhost',
  database: 'demo',
  password: config.pgpass,
  port: 5432,
  schema : 'demoscheme',
})

function fetchalldata(name,callback) {
    pool.query('SELECT * FROM '+name+ ' ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        callback(error,results);
      })
};


//able to insert into table
function insertintotable(name,callback)
{
  sql = 'INSERT INTO demoscheme.demotable(name, age) VALUES($1, $2)';
  const values = ['suyah',14]
  pool.query(sql,values,(err,results)=>{
    if(err) throw err;
    console.log(results);
  })
}



module.exports = { fetchalldata,insertintotable }