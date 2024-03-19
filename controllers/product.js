const path = require('path');

class ProductController{
    static getProducts(req, res){
        res.sendFile(path.resolve(__dirname + '/../views/products.html'))
    }
}

module.exports = ProductController