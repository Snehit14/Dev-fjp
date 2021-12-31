var inquirer = require('inquirer');
const cp = require('child_process');
const { Console } = require('console');


function displayDetails(){
inquirer
  .prompt([
    {
           type:'list',
           name :'Selection',
           choices:['About' , 'Skills' , 'Projects' , 'Academics']
    }
  ])
  .then((choices) => {
       if(choices.Selection =='About'){
              console.log(`A passionate coder and web developer who loves to code and explore new technology.`)
              displayNext()
       }

       else if(choices.Selection=='Skills'){
              console.log('JavaScript , Node , React , Java , DSA problem solving')
              displayNext()
       }

       else if(choices.Selection=='Projects'){
            cp.execSync('start chrome https://github.com/Snehit14/Dev-fjp/tree/master/Dev%20fjp')
            displayNext()
       }

       else if(choices.Selection=='Academics'){
              console.log('Good in academics with 9.1 sgpa till 4th semester in Computer Engineering')
              displayNext()
       }
  })
 
}

displayDetails()


function displayNext(){
       var inquirer = require('inquirer');
inquirer
  .prompt([
         { type:'list',
       name :'GoBack',
       choices:['back']
         }
  ])
  .then((choice) => {
    if(choice.GoBack = 'back'){
           displayDetails()
    }
  })
 
}