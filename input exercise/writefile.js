//"Write File" Event Emitter.
var fs = require('fs');
var emitter = require('events').EventEmitter;

//Function for creating a new document.
function createFile() {
    var e = new emitter();

    fs.writeFile('newdocument.txt', 'Hey There!', function (err) {
        if (err) throw err;
        e.emit('theProcess');
    });

    return e;
}

//Here's the emitter!
var createIt = createFile();

createIt.on('theProcess', function() {
    console.log("Content Written to File!");
});