const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false})); // req ile aldığımız veriyi kolayca parse etmek için middleware kullanıyoruz.


app.get("/add-coin", (req, res, next) => {
  res.send(`
    <html>
    <head><title>Add Coin</title></head>
    <body>
    <form action="/coins" method="POST">
    <input type="text" name="coinAmount">
    <input type="submit" value="Send Coin">
    </form>
    </body>
    </html>
    `);
});

//eğer use olarak kullanırsak kişi POST göndermeden de direkt olarak coins kısmına atlayabilir.
//bunu engellemek için middelewarei use yerine POST olarak değiştiriyoruz.
app.post('/coins',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/add-coin');
});







//routing yapmak

//bu alan en üstte olduğu ve / olduğu için her sayfada çalışacaktır.
// app.use('/',(req,res,next)=>{
//     console.log("Loglama yapıldı.");
//     next();
// });

// //route kısımlarının sıralaması da önemlidir.
// //'/' en üstte olursa diğer sayfaları göremeyiz çünkü hepsinde / var.
// app.use('/bitcoin',(req,res,next)=>{
//     res.send("Bitcoin");
// });

// app.use('/borsa',(req,res,next)=>{
//     res.send("Borsa");
// });

// app.use('/',(req,res,next)=>{
//     res.send("Ana sayfa");
// });

//middleware oluşturalım
// app.use((req,res,next)=>{
//     console.log("middleware 1 çalıştı");
//     next();
// });
//Eğer bir dönüş sağlanırsa diğer middleware e geçmez.
//Bunun için next() vermek zorundayız.

// app.use((req, res, next) => {
//   console.log("middleware 2 çalıştı");
// });

// app.get('/', (req,res)=>{
//     res.send("Hellow");
// });
// app.get('/products', (req,res)=>{
//     res.send("ürünler listelendi");
// });

// app.get('/bitcoin', (req,res)=>{
//     res.send("Bitcoin bilgileri");
// });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
