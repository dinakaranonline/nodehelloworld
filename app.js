/* const log = require('./logger');
const log1 = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs'); */
const events = require('events');
const emitter = new events.EventEmitter();
/* function sayHello(){
console.log("hello world2 ");
} */
//var pathObj1 = path.parse(__dirname);

//console.log(pathObj1);

logger = 1;

//sayHello();
//console.log(log);
//console.log(url);
//log('welcome to nodejs');
//log1('welcome to nodejs 1');

//var totalMem = os.totalmem();
//var freeMem = os.freemem();


/* fs.readdir(("./"),function(err,files){
    if (err) console.log("error",err);
    else console.log("files from async"+files);
}); */

//console.log(`total memory: ${totalMem}`);
//console.log(`free memory: ${freeMem}`);

//console.log(`host name : ${os.hostname}`);
//console.log(`platform name : ${os.platform}`);

//console.log(fs.readdirSync("./"));

/* myEvent.addListener('addUser',function(){
    console.log("user added triggered");
});
 */
emitter.on('updateUser',function(){
    console.log('user update triggered');
});

emitter.emit('updateUser');

emitter.on('FirstEvent', function (data) {
    console.log('First eventsubscriber: ' + data);
});

emitter.on('SecondEvent', function (data) {
    console.log('Second eventsubscriber: ' + data);
});

emitter.on('FirstEvent', function (data) {
    console.log('First Event Second eventsubscriber: ' + data);
});

emitter.on('FirstEvent',  (data) => {
    console.log('First Event Third ### eventsubscriber: ' + data);
});


emitter.emit('FirstEvent', 'This is my first Node.js event emitter example.');
emitter.emit('SecondEvent', 'This is my second Node.js event emitter example.');