function countEm() {
    var count = 0;
    var toTen = setInterval(howLong, 10);
    function howLong() {
        if(count == 1000) {
            clearInterval(toTen);
            console.log("Complete");
        }else{
            count++;
        }
    }
}

let finished = count;

const result = new Promise((resolve, reject) => {
    if(finished) {
        const workDone = "Congratulations";
        resolve(workDone)
    } else {
        const why = "Still Waiting";
        reject(why)
    }
})
