const router = require('express').Router()
const Book = require('../models/book')

router.get('/', async(req,res) => {
    try{
        const books = await Book.find();
        res.status(200).send(books)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})


module.exports = router