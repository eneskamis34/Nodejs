const http = require('http');

const server = http.createServer((req,res)=>{

    res.setHeader('Content-Type','application/json');

    res.statusCode = 200;

    res.statusMessage = 'OK';

    res.write(JSON.parse({name:'Samsung',price:3000}));

    res.end();
})

