var fs = require('fs');
var myOutput = fs.readFileSync('./it is written.txt', 'utf8');


//This just reads what's already been written.
var reader = new Promise(function(resolve, reject){
    resolve('true');
    console.log(myOutput);
});

module.exports = reader;

//Couldn't get them all to work together.