function add(a,b){
    console.log("The Sum is ", a+b)
}
function substract(a,b){
    console.log("The Substraction is", a-b)
}
function mul(a,b){
    console.log("The Multiplication is ", a*b)
}
function div(a,b){
    console.log("The Division is ", a/b)
}

module.exports = {
    addition : add,
    substract : substract,
    multiplication : mul,
    division : div,

}

// module.exports is a Object provided by Node.js by
// which you can export your functions in key value pair
// you will use your functions with the keys you have assigned
// to them