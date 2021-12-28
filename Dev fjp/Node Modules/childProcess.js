//Child process is a node module used to create subprocess within a script to perform
//different tasks
const cp = require('child_process')

/* console.log('trying to open calculator')

cp.execSync('calc')

console.log('calculator opened')

console.log('trying to chrome')

cp.execSync('start chrome')

console.log('chrome opened') */

cp.execSync('start chrome https://www.youtube.com')

let output = cp.execSync('node test.js')
console.log(output) //In output data is coming in buffer form(binary form)
console.log('Output is ' + output) // concating with a string and you can concat with an empty string as well
