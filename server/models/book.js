const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    genres: {
        type: Array
    },
    image: {
        type: String
    },
    status: {
        type: String,
    }
})

module.exports = mongoose.model('Book', bookSchema)