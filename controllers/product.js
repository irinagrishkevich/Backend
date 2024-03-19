const path = require('path');
const ProductModel  = require('../models/product')

class ProductController{
    static async getProducts(req, res){
        //get data
        const products = await ProductModel.findAll()
        res.sendFile(path.resolve(__dirname + '/../views/products.html'))
    }
}

module.exports = ProductController