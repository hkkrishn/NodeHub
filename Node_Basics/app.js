//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description: Main file to display express.js

//---------

const express = require('express')
const bodyParser = require('body-parser')


//make express application
const app = express();

//allow body parsing
//this function registers a middleware and call next but before it calls next conducts body parsing
app.use(bodyParser.urlencoded({extended:false}));

//add middleware
//use accepts an array of req handlers

//the function passed in will be applied to every incoming request
//next is a function defined by express.js and has to be executed for the request to travel on to the next middleware
//app use docs syntax app.use([path,]callback[,callback...])
//express goes through the file from top to bottom
//the path or route only indicates what the path has to start with
//if you dont call next the below middle wares will not be reached
//as a best practice if you are sending a response you do not want to call next()
//if you want a middleware to be applied to all req put it on top

app.use('/',(req,res,next)=>{

    //send allows us to send a response and allows us to create a body of type any
    //there is no need to set the Header

    next()
})
app.use('/add-product',(req,res,next)=>{

    //send allows us to send a response and allows us to create a body of type any
    //there is no need to set the Header
    res.send('<form action = "/product" method = "POST" ><input type = "text" name = "title"></input><button type = "submit"> Add Product</button></form>')
})

//since /product does not clash with /add-product it wont clash and can be placed before or after
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    //express function to redirect page to path
    res.redirect('/')



})


//express DOES NOT send a default response
app.use('/',(req,res,next)=>{

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




//Deleted Code from previous versions
// app.use('/oldversion',(req,res,next)=>{
//     console.log('In the middleware')
//     //next has to be called to send req to the next middleware
//     next()
// })