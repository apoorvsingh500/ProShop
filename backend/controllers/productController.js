import AsyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

const getProducts = AsyncHandler( async (req, res) => {
    const products = await Product.find({})
    res.json(products)

})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public

const getProductById = AsyncHandler( async (req, res) => {

    if(product) {
        res.json(product)
        }
        else {
            res.status(404)
            throw newError('Product not found')
        }

})

export {
    getProducts,
    getProductById
}