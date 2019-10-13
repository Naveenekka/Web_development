const express = require('express')
const blogController = require('./../controller/blogController')

let setRouter = (app) => {

    
    app.get('/hello-world',blogController.helloWorld)

    app.get('/example',blogController.printExample)


} //end setrouter funtion

module.exports = {
    setRouter : setRouter
}