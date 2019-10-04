var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('True');
        console.log("Complete.");
    }, 5000);
});

module.exports = promise;