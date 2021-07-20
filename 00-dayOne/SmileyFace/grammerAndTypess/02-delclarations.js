/*
What is a variable?

Variables are named containers for sorting data.
we can think of these containers as resources we can call upon later. Each
variable allows is to store data, which could be a value or a function, that we
will want to reference back to.

instead of saying 5276 we could instead name it something like billy and that
would mean 5276



*/
// a is the NAME and the = sign is giving it value to something else

let a = 2;

/*
    - 'let' is our KEYWORD.
    - 'a' is our NAME of our variable.
    - '=' is our ASSIGNMENT OPERATOR.
    - '2' is our variable's VALUE.
*/
// make sure to put a ; at the end of the value to complete the line

let b = 1;

console.log(a + b); // what should we get? 

/*
Restrictions with variables

- a variable must begin with a letter, underscore, or dolloar sign.
- number may follow the above characters, but cannot come first in the name.
- javascript is case sensitive - 'hello' and 'Hello' are different variables.
- no spaces are allowed in variable names
- camelCase is best practice for naking variables in js. This will help keep names
of variables readable
    ex: myName = 'Jerome';
    is easier to read than
    let myname = ;Jerome';
*/

let startingWithLetter = 'test';
let _startingWithUnderscore = 'test';
let $startingWithDollarSign = 'test';
// let 5startingWithNumber = 'test'; // CANNOT start a variable with a number

console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign)

/*
    Keywords
    var, let, const

    - var: the 'old' keyword for variables. We will not use this much nit it is still used depending on the project and when it was made.
     We will focus on the let and const.

    - let: the 'new' keyword for variables which was introduced in ES6 *newest version of ECMAScript, which is the standardiization of JS

    - const: also 'new' and declares an unchangeable, or constant, variable.
    the only limit to const variables is that onece they are decalred/assigned their value will NEVER change.


     */

    var variable = 'car variable';
    let variable = 'let variable';

    console.log(variable, letVariable)

    /*
        Declaration are the LEFT SIDE of the assignment operator (=)
        within a variable

        - let x

        initializations are the RIGHT SIDE of the assignment operator (=) and
        sets the value of the variable
        -let x = 10 
        
        10 would be the initialization
    */
        let x;
        console.log('Declaration:', x);

        x = 10;
        console.log('Initialization', x);

        x = 33;
        console.log(x);

        let y = 'Hello';
        console.log(' Both:',x,y);


        let today = 'Great!';
        const efa = 'Wonderful';
        console.log(today, efa);

        today - 'Awesome!';
        console.log(today, efa);
