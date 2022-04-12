const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: String,
    message: String
})
const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    date: String,
    image: String,
    comments: [commentSchema]
})

const Posts = mongoose.model('Post', postSchema)

module.exports = Posts