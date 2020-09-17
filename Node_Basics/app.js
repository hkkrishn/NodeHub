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
const path = require('path')


//make express application
const app = express();

//allow body parsing
//this function registers a middleware and call next but before

//get routes from admin.js

//if our paths in our router paths start with the same prefix we can parse it out
//only paths starting with /admin will go into adminRoutes
//express will omit the /admin when handling the routes in admin.js
app.use(bodyParser.urlencoded({extended:false}))

//serve files statically,forwards requests to the public folder
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes)
app.use(shopRoutes)

//if we dont handle the request we need a catch all middleware after all routes
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})



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