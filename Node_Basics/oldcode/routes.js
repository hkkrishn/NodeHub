//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description: separated routing logic

//-------------------------------------------------------------------------------------------------------------------//
const fs = require('fs');

 const requestHandler = (req,res)=>{

    const url = req.url;
    const method = req.method;
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

    //within we are going to redirect the user back to / and create a new file with the response in it
    if(url === "/message" && method === 'POST'){
        const body = []
        //register event listener, the data event is fired whenever a new chunk is ready to be read
        //takes a function to act on the data
        req.on('data',(chunk)=>{
            // we are parsing the req body
            //push all chunks to the body app
            body.push(chunk)
        })

        //this ecent listener runs when the body has been finished parsing
        req.on('end',()=>{
            //buffer the chunks
            //this creates a buffer and all the chunks we have parsed to it
            const parsedBody = Buffer.concat(body).toString();//convert to string since the body is text
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]

            fs.writeFile('message.txt',message,(err)=>{


                        //this is only sent if we are done woking on the file
                        res.statusCode = 302;
                        res.setHeader('Location','/')
                        return res.end()

            });
            // the input data should be present within this console log.
        })
        //allows node to add meta information to file, status 302 stands for redirection

    }
    res.setHeader('Content-Type','text/html')
    //write html to reutrn from the server
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello World</h1></body>')
    res.write('</html>')
    //end of writing
    res.end()

}

//export the function
module.exports = requestHandler