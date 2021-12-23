//Variable declaration with var , let and const

var a 
console.log(a) //first the variable is initialized with undefined

a = 20
console.log(a)
a = 'Hello' //Dynamic behaviour of JavaSript
a = null
a = true
console.log(a)
//JavaSript is a Synchronous language and a single threaded language

//let and const

//first problem with var - Redeclaration

var b = 2
console.log(b)
var b = 'I am a String'
console.log(b)

//let keyword does not allow us to redeclare a variable

//if-else

let flag = true
let num = 13

for(let i = 2 ; i*i <= num ; i++){
    if(num % i == 0){
        flag = false
        break;
    }
}

if(flag){
    console.log('num is prime' , num)
}
else{
    console.log('num is not prime')
}

//second problem with var - scoping - function scoping and block scoping

if(10%2==0){
    var c = 2
    console.log(c)
}

console.log(c)

//let is blocked space

//String and string methods --

let str = 'pepcoders'
console.log(str)

//string methods
//.length
console.log(str.length)

//extracting a part of string -- slice , substr
//slice(start,end) -- returns sliced array from starting index to end-1
let slicedStr = str.slice(3,7) // ending index is excluded
console.log(slicedStr)

//substr method
//substr(start,length) -- starting and length of the word
let subString = str.substr(3,4)
console.log(subString)

//replace method -- expects the word to be replaced as first argument and the replacement as second argument

let sayHello = 'Hello Snehit'
console.log(sayHello)

let sayBye = sayHello.replace('Hello' , 'Bye')
console.log(sayBye)

//toUpperCase and toLowerCase method

let text1 = 'hello world'
let text2 = text1.toUpperCase()
console.log(text2)

let text3 = 'HELLO WORLD'
let text4 = text3.toLowerCase()
console.log(text4)

//concatenation method

let firstStr = 'Hello'
let secondStr = 'World'
let concatenatedStr = firstStr.concat(secondStr)
console.log(concatenatedStr)

//trim method

let text = '   Hello World   '
console.log(text)
let trimmedText = text.trim()
console.log(trimmedText)