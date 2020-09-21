//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description:routes that handle the shop and what regular users can see


const express = require('express')
const router = express.Router();
const path = require('path')

//get access to products array from admin.js
const adminData = require('./admin')

const rootDir = require('../util/path')
console.log(rootDir)
router.use('/',(req,res,next)=>{

    //send allows us to send a response and allows us to create a body of type any
    //there is no need to set the Header

    next()
})



//express DOES NOT send a default response
router.get('/',(req,res,next)=>{
    //this is data inherent to Node server that is shared across all users
    //this is something that you do NOt want to do, security leak.
    console.log('shop.js',adminData.products)
    const products = adminData.products
    res.render('shop',{
        prods:products,
        pageTitle:'Store',
        path:'/',
        hasProducts:products.length>0,
        activeShop:true,
        productCSS:true
    })
    //send allows us to send a response and allows us to create a body of type any
    //there is no need to set the Header
    //__dirname holds the absolute path to this project folder

})

module.exports = router;