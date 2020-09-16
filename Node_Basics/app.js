//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description: Main file to display express.js

//---------

const http = require('http')
const express = require('express')


//make express application
const app = express();

//app is a valid request handler
//app sets a way in handling incoming requests
const server = http.createServer(app);
server.listen(3000)