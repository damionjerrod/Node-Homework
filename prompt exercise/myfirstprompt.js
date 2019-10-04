const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("What\'s your name?", (name) => {
    console.log(`Hi ${name}!`)
    readline.close()
})

readline.question("How old are you?", (age) => {
    console.log(`You are ${age}.`)
    readline.close()
})
