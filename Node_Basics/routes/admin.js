//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description:route that handles the creation of products that only admin can do

const express = require('express')
const path = require('path')

//Router is a mini express up that plugs in to the main express app

const rootDir = require('../util/path')
const router = express.Router()

//array to hold products
const products = [];


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




//the /admin part has been outsourced in app.js

router.get('/add-product',(req,res,next)=>{

    //send allows us to send a response and allows us to create a body of type any
    //there is no need to set the Header
    //grab the html file from the views folder with the absolute path

    res.render('add-product',{
        prods:products,
        pageTitle:'Add Product',
        path:'/admin/add-product',
        hasProducts:products.length>0,
        activeShop:true,
        productCSS:true
    })
})

//since /product does not clash with /add-product it wont clash and can be placed before or after
//app.get allows us to filter for get reqs and app.posts for post requests
//the same path can be used if the methods differ
router.post('/add-product',(req,res,next)=>{

    console.log('product added:')
    //push object into products array
    products.push({title:req.body.title})
    console.log(req.body)
    //express function to redirect page to path
    res.redirect('/')



})

exports.routes = router;
exports.products = products;