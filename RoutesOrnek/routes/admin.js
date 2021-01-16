const epxress = require('express');
const bodyParser = require('body-parser');

const router = epxress.Router();

const path = require('path');

router.use(bodyParser.urlencoded({extended:false}));


router.get("/add-coin", (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-coin.html'));
  });

router.post('/add-coin',(req,res,next)=>{
    console.log(req.body);
    res.redirect('admin/add-coin');
});



module.exports = router;