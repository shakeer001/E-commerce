const express = require('express')
const { getProduct, deleteProduct, updateProduct, createProduct } = require('../../controllers/products')
const router = express.Router()

router.get('/', getProduct)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)


module.exports = router