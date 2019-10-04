var waitForIt = require('./myinterval.js');

function willItCount() {
    console.log("Pending...");
    return waitForIt;
}

willItCount();