const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/ecommerce')


module.exports = db