const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname,'public')));


const adminRoutes = require('./routes/admin');
const userRouters = require('./routes/user');


app.use('/admin',adminRoutes);
app.use('/user',userRouters);
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','errorPage.html'));
});

app.use(bodyParser.urlencoded({extended:false}));



app.listen(3000,()=>{
    console.log("listening 3000");
})