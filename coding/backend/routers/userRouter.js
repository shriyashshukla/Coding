const express = require("express");
const Model = require('../models/userModel');
const { model } = require("mongoose");

const router = express.Router();

router.post("/add", (req, res) => {
  console.log(req.body);
new Model(req.body).save()

.then((result) => {
  res.json(result);
  
}).catch((err) => {
  console.log(err);
  res.status(500).json(err);
  
});

// denote url parameter
router.get("/getbyemail/:email",(req,res)=>{
  console.log(req.params.email);
 Model.find({email:req.params.email})

 .then((result) => {
  res.json(result);
 }).catch((err) => {
  console.log(err);
  res.status(500).json(err);
 });
})
});


router.get("/getall", (req, res) => {
 Model.find({})
 .then((result) => {
  res.json(result);
  
 }).catch((err) => {
  console.log(err);
  res.status(500).json(err);
 
  
 });
});


    
router.get("/getbyid/:id", (req, res) => {
  
 Model.findById(req.params.id)
 .then((result) => {
  res.json(result);
 }).catch((err) => {
  console.log(err);
  res.status(500).json(err);``
  
 });
});

router.get("/update", (req, res) => {
  res.send("response from update user Router");
});

// getall
// getbyemail
// getbyid
// update

module.exports = router;