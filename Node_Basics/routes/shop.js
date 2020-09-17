//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description:routes that handle the shop and what regular users can see


const express = require('express')
const router = express.Router();
const path = require('path')

const rootDir = require('../util/path')
router.use('/',(req,res,next)=>{

    //send allows us to send a response and allows us to create a body of type any
    //there is no need to set the Header

    next()
})



//express DOES NOT send a default response
router.get('/',(req,res,next)=>{

    //send allows us to send a response and allows us to create a body of type any
    //there is no need to set the Header
    //__dirname holds the absolute path to this project folder
    res.sendFile(path.join(rootDir,'views','shop.html'))
})

module.exports = router;