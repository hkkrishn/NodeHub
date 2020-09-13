//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description: this is the root file of our node.js application that is run on the server


//spin up node.js server

//require either takes a path to another file or a core module
// a path to  another local file file has to always to start with ./
// without ./ it will look for it globally
const http = require('http');

//file package core module
const fs = require('fs');

//Request Listener, request call back function
const rqListener=(req,res)=>{
    //this function which will take in the req and res objects as args
    // console.log(req)
    //headers are metadata that are included in the req obj
    console.log(req.url)
    const url = req.url
    const method = req.method
    if(url === "/"){
        res.setHeader('Content-Type','text/html')
        //write html to reutrn from the server
        res.write('<html>')
        res.write('<head><title>Node server app</title></head>')
        //send post request on clicking button to /message
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        //end of writing
        // the return statement is not required but it exits the function
         return res.end()
    }
    //process.exit()
    //hard shutdown of our server

    //response object

    //within we are going to redirect the user back to / and create a new file with the response in it

    if(url === "/message" && method === 'POST'){
        fs.writeFileSync('message.txt','DUMMY Text');
        //allows node to add meta information to file, status 302 stands for redirection
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end()
    }
    res.setHeader('Content-Type','text/html')
    //write html to reutrn from the server
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello World</h1></body>')
    res.write('</html>')
    //end of writing
    res.end()
    //This sends back a response with an html file iside of it

}

//createServer takes a request listener or a function that executes for every
//incoming req
//it can also be an anonymous function
//Create server method RETURNS a server and needs to be saved in a new var

 const server = http.createServer(rqListener);

 //listen will keep the server running and listen for incoming requests

 server.listen(3000);