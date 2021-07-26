/*
    FUNCTIONS

    Functions are processes that we call ipon to run an action. They can do the following:

    - Take in an input to process, modify, or respong to ( not required)
    - Return a value ( not required)
    - Can be invoked (or called) as often as needed
*/
//1       2  
function hi(){

    console.log('HI')
    // 3

    // 1 : fucntion keyword - we use this to define a function
    // 2 : name of the function. followed by parans - this is how we will call the fuction
    // 3: code goes here  - this will be the 'brains' if the function


}

hi()
// console.log(hi());
// JS is case sensitive



// let myName ='Jerome';


// CAllING THE FUNCTION
//aka putting the 'fun' in function
// in order to invoke (call) a function, we will simply write it's name and put parans after it


// hi()
//When we console.log a function, javascript will first evaluate the function,
//meaning it will run all of the code and look for a value from it. If we do not gave a return statement
// within the function, we will get back undefined

let myName = 'Jerome';

function myNameCap() {
    myName = myName.toUpperCase();
}


//console.log() will not always run, or save, changes we make to it
// se in the console. it is PURELY for us to see what is happening
//I ge tto look at this//
// console.log(myName);
//THE COMPUTER gets to look a this 
// myName

// myNameCap();

// console.log(myName);

function hi(){
    console.log('HI')
   }
   
   hi();

   let myName = 'Jerome';

   function myNameCap() {
       myName = myName.toUpperCase();
       hi()
   }
   
   console.log(`This is working ${myName}`);

   myNameCap();
   console.log(`This is working ${myName}`);


   /*
FUNCTION DECLARATION

A chunk of code that performs a set chunck of code when it is invoked (or called)

   */

function funcOne() {
    console.log('This is the code that we run in function one');
}

// console.log(funcOne); funcOne wil still refer to the function, but without () it will not invoke
funcOne()


/*
FUNCTION EXPRESSIONS

assigning a function to a variable is what we call an expression
*/

let first = function funcTwo() {
    console.log('Code being run in the function expression');
}

first();


let example = function () {
    console.log('What is my name?');
}

example();

console.log(typeof example);
console.log(typeof example());


/*
ANONYMOUS FUNCTIONS

anonymous functions are stored in memory but the runtime does not automatically create a reference to it.

The main use would be to pass these functions through another functions. Maybe have a ternary wehere is something is trie we run  one funtion, else we run a different function
*/

// COmmon use would be to assign these to a variable
let anon = function () {
    console.log('Anonymous Function');
}

anon();


//example of writing anonymous functions
true || false ? function() {console.log('true')} : function() {
    console.log('false')
}

//fetch ('something')
//  .then(function(response) {response.json()}) // this is an example of how we will be using code later


/*
PARAMETERS

we will be using functions to pass infoprmation and return a result

parameters will allow out functions to take in outside information
*/

function parameterFunc(num) {
    console.log(num)
}
// when called it will put the value in the place of 'num' 
parameterFunc(7);


//Next example
 let firstName = 'Jane';
 let lastName = 'Doe';

 function greeting(first, last) {
     console.log(`Hi, ${first}! Welcome back`);
     console.log( `This is the first parameter: ${first}`);
     console.log(`This is the last parameter: ${last}`);
 }

 greeting(firstName);
 greeting(lastName);
 greeting();
 greeting(firstName, lastName);
 greeting(firstName, null);
 greeting('', lastName);

 