const express = require('express');
const router = express.Router();

const products = [
    {name: 'Samsung S8', price: 5000, image: '1.jpg', description:'İyi Telefon'},
    {name: 'Samsung S7', price: 4000, image: '2.jpg', description:'Güzel Telefon'},
    {name: 'Samsung S9', price: 6000, image: '3.jpg', description:'Süper Telefon'},
    {name: 'Iphone 7S', price: 5500, image: '4.jpg', description:'Hoş Telefon'},

]
// /admin/add-product=> GET
router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('add-product',{title:"Add Product"});
});

// /admin/add-product=> POST
router.post('/add-product', (req, res, next) => {
    //gelen ürünleri products dizinine ekliyoruz.
    products.push({name:req.body.name, price:req.body.price, image:req.body.image, description:req.body.description, path:'/admin/add-product'});
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;