//key value pair
//to declare and object

let obj = {}
let captain = {
    firstName : 'Steve' , //firstname is key and steve is value
    lastName : 'Rogers' ,
    friends : ['Bucky' , 'Tony Stark' , 'Dr Banner'],
    isAvenger : true ,
    age : 150 ,
    address : {
        state : 'New York' ,
        city : 'Manhatten'
    } ,
    
    sayHi : function fn(){
        console.log('Captain says Hi')
    }
}

console.log(captain)

//Dot notation

console.log(captain.firstName)
console.log(captain.friends)
console.log(captain.friends[1])

//Bracket notation
console.log(captain['age'])

captain.sayHi()

//Update object
captain.isAvenger = false
console.log(captain)

//create something inside an object
captain.movies = ['first Avenger' , 'Age of Ultron' , 'Endgame']
console.log(captain)

//Delete a property
delete captain.lastName
console.log(captain)

//Special loop (For in loop)

for(let key in captain){
    console.log('Key-->' , key , 'Value-->' , captain[key])
}