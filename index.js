// This is needed to import express to our application
const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')
//declarring an instance or creating an appliacation instance
const app = express()
const mongoose = require('mongoose')

//bootstrap route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function(file){
    if (-file.indexOf('.js')){
        console.log("Including the following file");
        console.log(routesPath+'/'+file);
        let route = require (routesPath + '/' +file);
        route.setRouter(app);
    }
});
//end bootstrrap route

//bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file){
    if(-file.indexOf('.js'))require(modelsPath + '/' + file)
})
//end bootstrap models

//listening the server + creating  a local server
app.listen(appConfig.port, () => {
    console.log(`Example app listening on port 3000!`);
    //Creating the mongoDB connection here:
    let db = mongoose.connect(appConfig.db.uri, {useMongoClient:true});
})

//handling mongoose connection error
mongoose.connection.on('error', function (err){
    console.log ('database connection error');
    console.log(err)
});
// end mongoose connection error

//handling mongosse success event
mongoose.connection.on('open', function (err){
    if (err){
    console.log ('database connection error');
    console.log(err)
    }
    else {
        console.log("Database connection open success");
    }
});// end mongoose connection open handler

