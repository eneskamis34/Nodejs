const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log(req);
// });
const server = http.createServer((req,res)=>{
    if(req.url == '/')
    {
        res.write('Ana dizin');
        res.end();
    }
    else if(req.url === '/api/products')
    {
        res.write('ürünler');
        res.end();
    }
});


// server.on('connection',function(){
//     console.log('new connection');
// })
server.listen(3000);

console.log('listening port on 3055');