const express = require('express');
const router = express.Router();
const cors = require("cors")
const app = express();
router.use(cors());
const db = require('../mysql_connect');
// const pg = require('../postgre_connect')



//values for admin dashboard
router.post("/admin",(req,res)=>
{
  console.log(req.body);
  let resdata;
  let totalowner;
  let totaltenant;
  let totalemployee;
  
  let resul = db.totalowner((err,result)=>
  {
    if(err) console.log(err);
    var resultArray = Object.values(JSON.parse(JSON.stringify(result))[0])[0];
    totalowner = resultArray;
  });
  resul = db.totaltenant((err,result)=>
  {
    if(err) console.log(err);
    var resultArray = Object.values(JSON.parse(JSON.stringify(result))[0])[0];
    totaltenant = resultArray;
  });
  resul = db.totalemployee((err,result)=>
  {
    if(err) console.log(err);
    var resultArray = Object.values(JSON.parse(JSON.stringify(result))[0])[0];
    totalemployee = resultArray;
  });
  resul =db.getdata('tenant',(err,result)=>{
    if(err) console.log(err);
    tenantdata = result;
    resdata = {
      totalowner : totalowner,
      totaltenant: totaltenant,
      totalemployee: totalemployee,
    }
    res.send(resdata);
  })

})



//values for owner dashboard
router.post("/owner",(req,res)=>
{
    let resdata;
  let totaltenant;
  let totalcomplaint;
  let totalemployee;

  resul = db.totaltenant((err,result)=>
  {
    if(err) console.log(err);
    var resultArray = Object.values(JSON.parse(JSON.stringify(result))[0])[0];
    totaltenant = resultArray;
  });
  resul = db.totalcomplaint((err,result)=>
  {
    if(err) console.log(err);
    let resultArray = Object.values(JSON.parse(JSON.stringify(result))[0])[0];
    totalcomplaint = resultArray;
  });

  resul = db.totalemployee((err,result)=>
  {
    if(err) console.log(err);
    let resultArray = Object.values(JSON.parse(JSON.stringify(result))[0])[0];
    totalemployee = resultArray;
    resdata = {
      totaltenant : totaltenant,
      totalcomplaint : totalcomplaint,
      totalemployee : totalemployee
    }
    res.send(resdata);
  })
})


//values for 
router.post("/employee",(req,res)=>
{
    let totalcomplaint;
    const empid = req.body.userId;
    let sal;
    resul = db.empsalary(empid,(err,result)=>
    {
      if(err) console.log(err);
      let resultArray = Object.values(JSON.parse(JSON.stringify(result))[0])[0];
      sal = resultArray;
    })
    resul = db.totalcomplaint((err,result)=>
  {
    if(err) console.log(err);
    let resultArray = Object.values(JSON.parse(JSON.stringify(result))[0])[0];
    totalcomplaint = resultArray;
    resdata = 
    {
      salary : sal,
      totalcomplaint : totalcomplaint
    }
    res.send(resdata);
  });
})

router.post("/tenant",(req,res)=>
{
  const username = req.body.userId;
  const rest = db.gettenantdata(username,(err,result)=>
  {
    if(err) console.log(err);
    res.send(result);
})

});

module.exports = router; 