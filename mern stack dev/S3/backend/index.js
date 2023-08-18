// import express
const express = require('express');

//initialize express
 const app= express();
 const port = 5000;

app.get('/', (req,res) =>{
        res.send("ayush")

})

 // starting server 
 app.listen(port,()=>{console.log('server started')});


