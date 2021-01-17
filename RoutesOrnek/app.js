const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

//pug template engine kullanımı.
app.set('view engine','pug');
app.set('views','./views');

const admin = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', admin.routes);
app.use(userRoutes);

app.use((req, res) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404',{title:"Page Not Found | 404"});//pug
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});
