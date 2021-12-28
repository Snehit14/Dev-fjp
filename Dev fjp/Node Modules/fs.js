//Node modules are used to perform different  tasks
//Filesystem module
//1. we will be reading , writing , updating , deleting files from our script
const fs = require('fs')

const path = require('path')

let content = fs.readFileSync('f1.txt') // readFileSync is a method used to read a file
console.log('This is f1 data -->' + content)

 //write to a file
//writeFileSync method is used to put data(write) to a file
//If the file passed does not exist it creates a new file and writes to it
fs.writeFileSync('f2.txt' , 'Hello from f2')

//append a file
//appendFileSync adds data to the previously written file
//basicallly it appends a file with new data passed
fs.appendFileSync('f2.txt' , ' this is f2 data')

//delete a file by passsing it's path
//unlinkSync
fs.unlinkSync('f2.txt')
console.log('File Removed')
 
// Directories

 //Create
//mkdirSync is used to create a new directory
//fs.mkdirSync('myDirectory')

//delete
//rmdirSync is used to remove or delete a directory
//fs.rmdirSync('myDirectory')

//to check whether a directory exists or not we can use existsSync method
//if the directory exists the method returns true otherwise false
let doesExist = fs.existsSync('myDirectory')
console.log(doesExist)

//stats of a path (details of a folder)
//lstatsync provides us with all the statistics of a directory
let statsofPath =fs.lstatSync('myDirectory')
console.log(statsofPath)

console.log('isFile?' , statsofPath.isFile()) 
// isFile is a method that checks whether a passed path is a file or not
console.log('isDirectory' , statsofPath.isDirectory()) 
//isDirectory is a method that checks whether a passed path is directory or not

//readdirSync method is used to check the content of a particular directory
let folderPath = 'C:\\Users\\Snehit Shinde\\Desktop\\Dev fjp\\Dev fjp\\Node Modules\\myDirectory'
let folderContent = fs.readdirSync(folderPath)
console.log('directory content  ' + folderContent)

//copy files

//src file , destfolder

let srcFilePath = 'C:\\Users\\Snehit Shinde\\Desktop\\Dev fjp\\Dev fjp\\Node Modules\\myDirectory\\f3.txt'
let destFolder = 'C:\\Users\\Snehit Shinde\\Desktop\\Dev fjp\\Dev fjp\\Node Modules\\myDirectody2'

let tobecopiedFileName = path.basename(srcFilePath)
console.log(tobecopiedFileName)
//basename method gets the actual name of the file or directory

let destPath = path.join(destFolder , tobecopiedFileName)
console.log(destPath)

fs.copyFileSync(srcFilePath , destPath)
console.log('file copied')

