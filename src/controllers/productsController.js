const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const productsController = {
    index: (req, res) => {
        res.render('products', { products: products });
    },
    detail: (req, res) => {
        let product = products.find(product => product.id == req.params.id);
        res.render('productDetail', { product: product });
    }

};
module.exports = productsController;