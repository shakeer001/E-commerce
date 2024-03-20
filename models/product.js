const mongoose = require('mongoose');


const Product = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }

}, { timestamps: true })


module.exports = mongoose.model('Product', Product)