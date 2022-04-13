const express = require ('express')
const router = express.Router()
const Posts = require('../models/info')

//index - home
router.get('/', (req, res)=>{
    Posts.find({}, (err, foundPosts)=>{
        res.json(foundPosts)
    })
})

//delete
router.delete('/:id', (req, res)=>{
    Posts.findByIdAndRemove(req.params.id, (err, deletedPosts)=>{
        res.json(deletedPosts)
    })
})

//update
router.put('/:id', (req, res)=>{
    Posts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPosts)=>{
        res.json(updatedPosts)
    })
})

//create
router.post('/', (req, res)=>{
    Posts.create(req.body, (err, createdPost)=>{
        res.json(createdPost)
    })
})

//show
router.get('/:id', (req, res)=>{
    Posts.findById(req.params.id, (err, foundPost)=>{
        res.json(foundPost)
    })
})

module.exports = router