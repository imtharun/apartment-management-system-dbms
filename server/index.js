const express = require('express');
const router = express.Router();
const pg = require('../postgre_connect')


//insert into demo table
router.post("/demotable",(req,res)=>
{
    console.log("got request");
    const resul = pg.fetchalldata(('demotable'),(err,result)=>{
        res.send(result.rows);
    })
})


router.post("/tenant",(req, res)=>
{
    const uname = req.body.username;
    const uage = req.body.password;
    let values = [uname,uage];
    const rest = pg.insertintotenant(values,(err,result)=>{
    if(err) throw err;
        res.sendStatus(200);
    })
})

router.post("/employees",(req, res)=>
{
    const uname = req.body.username;
    const uage = req.body.password;
    let values = [uname,uage];
    const rest = pg.insertintoemployees(values,(err,result)=>{
    if(err) throw err;
        res.sendStatus(200);
    })
})


router.post("/block_admin",(req, res)=>
{
    const uname = req.body.username;
    const uage = req.body.password;
    let values = [uname,uage];
    const rest = pg.insertintoblock_admin(values,(err,result)=>{
    if(err) throw err;
        res.sendStatus(200);
    })
})


router.post("/room",(req, res)=>
{
    const uname = req.body.username;
    const uage = req.body.password;
    let values = [uname,uage];
    const rest = pg.insertintoroom(values,(err,result)=>{
    if(err) throw err;
        res.sendStatus(200);
    })
})


router.post("/owner",(req, res)=>
{
    const uname = req.body.username;
    const uage = req.body.password;
    let values = [uname,uage];
    const rest = pg.insertintoowner(values,(err,result)=>{
    if(err) throw err;
        res.sendStatus(200);
    })
})


router.post("/block",(req, res)=>
{
    const uname = req.body.username;
    const uage = req.body.password;
    let values = [uname,uage];
    const rest = pg.insertintoblockt(values,(err,result)=>{
    if(err) throw err;
        res.sendStatus(200);
    })
})


router.post("/rental",(req, res)=>
{
    const uname = req.body.username;
    const uage = req.body.password;
    let values = [uname,uage];
    const rest = pg.insertintorental(values,(err,result)=>{
    if(err) throw err;
        res.sendStatus(200);
    })
})
module.exports = router; 