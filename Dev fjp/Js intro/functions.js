//function expects arguments

function add(a,b){
    console.log(a+b)
} //function declaration , a and b are parameters

add(5,4) //function invokation , 5 and 4 are arguments

//with the use of return statement
function add1(c,d){
    return(c+d)
} //function declaration , c and d are parameters

let sum = add1(6,10) //function invokation , 6 and 10 are arguments
console.log(sum)

//in JavaSript functions are known as first class Citizens
let sayHi = function(s){
    console.log(s)
}//anonymous functions -- the function with no name

sayHi(4)