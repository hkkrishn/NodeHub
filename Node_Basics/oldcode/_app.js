//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description: this is the root file of our node.js application that is run on the server

//-------------------------------------------------------------------------------------------------------------------//

//spin up node.js server
//require either takes a path to another file or a core module
// a path to  another local file file has to always to start with ./
// without ./ it will look for it globally
const http = require('http');
//file package core module
const fs = require('fs');
const { parse } = require('path');
const requestHandler = require('./routes')




//Request Listener, request call back function
const rqListener=(req,res)=>{
    requestHandler(req,res)
    //this function which will take in the req and res objects as args
    // console.log(req)
    //headers are metadata that are included in the req obj


    //This sends back a response with an html file inside of it
}
//createServer takes a request listener or a function that executes for every
//incoming req
//it can also be an anonymous function
//Create server method RETURNS a server and needs to be saved in a new var
 const server = http.createServer(rqListener);
 //listen will keep the server running and listen for incoming requests
 server.listen(3000);