//os module -- It provides operating system related 
//utility methods and properties

const os = require('os')

console.log(os.arch()) //tells about system architecture (32 or 64 bit)

console.log(os.platform()) //tells about the machine

console.log(os.networkInterfaces()) //gives details about the network you are in

console.log(os.cpus()) //gives details about the cpu