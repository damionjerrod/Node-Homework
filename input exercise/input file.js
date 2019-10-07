var fs = require('fs');

var getInput = new Promise(function(resolve, reject){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    /* This asks a question then writes the response to a different
    file.*/
    readline.question("What\'s your name?", (name) => {
        fs.appendFileSync('it is written.txt', `Hi ${name}!`);
        readline.close()
     })
});

module.exports = getInput;

//Couldn't get them all to work together.