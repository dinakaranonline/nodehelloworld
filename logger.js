var path = require('path');

function log(message){
    //console.log(message);
}

function log1(message){
   // console.log(message);
} 

url = "dinakaran.dev";

//console.log(__dirname);
//console.log(__filename);

var pathObj = path.parse(__dirname);

//console.log(pathObj);

module.exports = log;
