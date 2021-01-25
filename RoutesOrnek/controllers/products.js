const Product =require("../models/products");

exports.getProducts = (req, res, next) => {
    const products = Product.getAll();
    //res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
    res.render('index',
    {title:"HomePage",
     products: products, path: '/'});
}

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('add-product',{title:"Add Product"});
}

exports.postAddProduct = (req, res, next) => {
    //gelen ürünleri products dizinine ekliyoruz.
    const product = new Product(req.body.name, req.body.price, req.body.imageUrl, req.body.description);
    product.saveProduct();
    res.redirect('/');
}