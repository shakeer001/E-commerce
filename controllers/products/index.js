const Product = require("../../models/product")

module.exports.getProduct = async (req, res) => {


    try {
        const products = await Product.find({})
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}



module.exports.createProduct = async (req, res) => {


    try {
        const product = await Product.create(req.body)
        return res.status(201).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}


module.exports.updateProduct = async (req, res) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}


module.exports.deleteProduct = async (req, res) => {


    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}