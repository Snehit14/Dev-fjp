let arr = [1 , 'Hello' , 3 , true]
//In JS you can put any kind of data in the array
console.log(arr);

//Array methods
let cars = ['BMW' , 'Jaguar' , 'Audi']

//replace an element in an array
cars[1] = 'Bentley'
console.log(cars)

//add a new element to an array
cars[3] = 'Mercedes'
console.log(cars)

//length of an array
console.log(cars.length)

//array manipulation methods
//pop() method -- it takes out an element from the end of an array
let cars1 = ['BMW' , 'Tesla' , 'Porsche']
let poppedCar = cars1.pop()
console.log(poppedCar)

//push() method -- it adds an element at the end of an array
cars1.push('Mini Cooper')
console.log(cars1);

//shift() method -- it removes element from the starting of an array
let shiftedCar = cars1.shift()
console.log(shiftedCar)
console.log(cars1)

//unshift() method -- it adds an element at the start of an array
cars1.unshift('Volkswagon')
console.log(cars1)