const express = require('express');
const router = express.Router();

const admin = require('./admin');

router.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));




    res.render('index',{title:"HomePage", products: admin.products, path: '/'});
});

module.exports = router;