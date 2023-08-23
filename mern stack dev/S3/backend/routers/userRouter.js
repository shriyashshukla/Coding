const express = require('express');

const router = express.Router();
 router.get('/add',(req,res)=>{
    res.send('response from user Router');
 })

 // getall 
router.get('/getall', (req,res) =>{
    res.send('response from getall');
})
 //getbyemail
 router.get('/getbyemail', (req,res) =>{
    res.send('response from getbyemail');
})
 //getbyid
 router.get('/getbyid', (req,res) =>{
    res.send('response from getbyid');
})
 //update
 router.get('/update', (req,res) =>{
    res.send('response from update');
 })

 module.exports=router;