// import express
const express = require('express');

const userRouter=require('./routers/userRouter');


//initialize express
 const app= express();
 const port = 5000;

// mid
app.use('/user',userRouter);

app.get('/', (req,res) =>{
        res.send("ayush")

});
 //home
app.get('/home', (req,res) =>{
    res.send('response from home');


})


//add

app.get('/add', (req,res) =>{
    res.send('response from add');


})
// getall
app.get('/getall', (req,res) =>{
    res.send('shriyash get all ');


})

 // starting server 
 app.listen(port,()=>{console.log('server started')});


