const EventEmitter = require('events');
const emitter = new EventEmitter;

//listener kayıt et
emitter.on('connection',function(){
    console.log('bağlantı kuruldu..');
});

emitter.on('logout',function(){
    console.log('bağlantı koptu.');
});

emitter.on('parametreliBaglanti',function(error,args){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(args.id);
        console.log(args.message);
    }
});

//eventi tetikle
emitter.emit('connection');
emitter.emit('logout');
emitter.emit('parametreliBaglanti',{id:1,message:'Başarılı'});
