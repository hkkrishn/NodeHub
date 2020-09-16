//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description: Main file to display express.js

//---------

//Routes
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const express = require('express')
const bodyParser = require('body-parser')


//make express application
const app = express();

//allow body parsing
//this function registers a middleware and call next but before

//get routes from admin.js
app.use(adminRoutes)
app.use(shopRoutes)



//app is a valid request handler
//app sets a way in handling incoming requests


//the below line is equivalent to ;
// const server = http.createServer(app);
// server.listen(3000)
// No need for the http core module
app.listen(3000)




//Deleted Code from previous versions
// app.use('/oldversion',(req,res,next)=>{
//     console.log('In the middleware')
//     //next has to be called to send req to the next middleware
//     next()
// })