//Author:Harikrishnan Kuppusamykrishnan
//Project: NodeHub
//Date: 08/06/2020
//Description: Helper function to derive absolute paths

//---------

const path = require('path')
//dirname returns the directory name of the path
//require.main returns the main module that started our app -- app.js
module.exports = path.dirname(process.mainModule.filename)