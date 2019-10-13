//Importing mongoose modules
const mongoose = require('mongoose')
// import schema (here the schema is defined onto thow the strucure is going to look like.)
const Schema = mongoose.Schema;

let blogSchema = new Schema(
    {
        blogId: {
            type: String,
            unique: true
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        bodyHtml: {
            type: String,
            default: ''
        },
        views: {
            type: Number,
            default: 0
        },
        ispublished: {
            type: Boolean,
            default: false
        },
        category: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        tags: [],
        created: {
            type: Date,
            default: Date.now
        },// user or mentor
        lastModified: {
            type: Date,
            default: Date.now
        }
    }

)
mongoose.model{'Blog',blogSchema};