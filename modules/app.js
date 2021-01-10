//URL
// const url = require('url');
// const addrss = "https://nodejs.org/docs/latest-v13.x/api/";
// let result = url.parse(addrss,true);
// console.log(result);



//FileSystem
const fs = require('fs');

// const files = fs.readdir('./',function(error,data){
//     if(error)
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log(data);
//     }
// });

// const data = fs.readFile('index.html','utf-8',function(error,data){
//     if(error)
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log(data);
//     }
// });


//Dosya Oluşturma
//writeFile tekrar çalışırsa metnin üstüne yazar.
//appendFile tekrar çalışırsa metnin üstüne ekler.
fs.writeFile('deneme.txt','merhaba bu bir deneme',function(error){
    if(error)
    {
        console.log(error);
    }
    else{
        console.log("Dosya oluşturuldu.");
    }
});


//Dosya Silme
fs.unlink('deneme.txt',function(error){
    console.log("dosya silindi.");
});

