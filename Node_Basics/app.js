//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description: Main file to display express.js

//---------

const express = require('express')


//make express application
const app = express();

//add middleware
//use accepts an array of req handlers

//the function passed in will be applied to every incoming request
//next is a function defined by express.js and has to be executed for the request to travel on to the next middleware
app.use((req,res,next)=>{
    console.log('In the middleware')
    //next has to be called to send req to the next middleware
    next()
})

//express DOES NOT send a default response
app.use((req,res,next)=>{
    console.log('In the middleware2')
    //send allows us to send a response and allows us to create a body of type any
    //there is no need to set the Header
    res.send('<h1>Hello from Hari</h1>')
})

//app is a valid request handler
//app sets a way in handling incoming requests


//the below line is equivalent to ;
// const server = http.createServer(app);
// server.listen(3000)
// No need for the http core module
app.listen(3000)
