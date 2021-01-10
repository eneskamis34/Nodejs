const Logger = require('./logger');
const logger = new Logger();


//listener kayıt et
logger.on('connection',function(){
    console.log('bağlantı kuruldu..');
});

logger.log('eneskamis login oldu');

