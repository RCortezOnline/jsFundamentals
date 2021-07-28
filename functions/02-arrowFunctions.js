/*
ARROW FUNCTIONS

arrow functions are expressionsal functions that can be simplified into one fo two forms: concise body and block body. The main goal is to genereate shorter syntax for writing a function
*/

function regFunc() {
    console.log('just a regular function');
}

regFunc();

let arrowFunc = () => console.log('function in one line');
arrowFunc();
/*
1- A variable created to hold the value of our anonymous arrow function
 - Arrow functions are ALWAYS anonymous.
2- Parameters are still capable of being added
    -Parameters go in the () as they would with a nrmal function, BUT i we onyl have 1, no more or less, parameter, we do not need (). If we have no parameters we are still required to put().
3- 'How we see an arrow' . This is JS syntax that says we are about to process a function.
4- The code the arrow functiojn will run i.e "Do This..."
*/

let arrow = (x) => console.log(x);
arrow(10);


// CONCISE vs BLOCK BODY

// CONCISE BODY
//When we have a simple return, or response, from our arrow function, it makes sense to write it in a concise, simplidied way. When we use a concise body arrow function, the 'return' statement is implied (meaning we do not have to write it)

let conciseBody = (x, y) => x + y;

let x = 1
let y = 2
console.log(conciseBody(1, 2)); // retirm sets conciseBody(1,2) = 3

//little more complex concise code
let slightlyComplexConsise = (x, y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and  ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`);

slightlyComplexConsise(3, 1);
slightlyComplexConsise(2, 1)

// BLOCK BODY
// the 'return' keyword IS required. We will incliude curly braces.
//Sometimes it will make sense to use block bofy if we need to do multiple lines of code

let blockArrow = (x, y) => {
    return `${x} and ${y} are in a block body arrow function`
    //ANY code below the retirn statement in a function will be ignored. If we write code below it, it will not run
    //console.log();
}

console.log(blockArrow(1, 2));
//variable will hold the value of the returned string
let blockReturn = blockArrow(1, 2);

//
let blockResponseLog = blockArrow(1, 2);

//block functions need a returned statement or we wont get a response. we need to give it information


let hero = 'Robin Hood';
let nock = 1;
function shot(x, y) {
    y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x} shot ${y} arrows at the target!`);
};

shot(hero, nock);


let hero = 'Robin Hood';
let nock = 1;


let shot = (x, y) => y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x} shot ${y} arrows at the target!`);

shot(hero, nock);

// Using a block body, pass the same avariables but increase the number of shots until the second console.log is printed

let hero = 'Robin Hood';
let nock = 1;

// 1- block body arrow function (?)
//2- [ass in 2 variables
// 3- run the conditional
//4- repeat the code until the result changes?

let shot = (x, y) => {

    for (y; y < 4; y++) {
        console.log('y:', y)
        if (y < 3) {
            console.log(`${x} only shot ${y} arrow...`)
        } else {
            console.log(`${x} shot ${y} arrows at the target!`);
        }

    }

    shot(hero, nock);




    /*
  ARROW FUNCTIONS
  Arrow functions are expressional functions that can be simplified into one of two forms: Concise body and Block body. The main goal is to generate shorter syntax for writing a function.
*/
    // Regular Function
    function regFunc() {
        console.log('just a regular function');
    }
    regFunc();
    //      (1)    (2) (3)    (4)
    let arrowFunc = () => console.log('function in one line');
    arrowFunc();
    /*
      1: A variable created to hold the value of our anonymous arrow function
        - Arrow functions are ALWAYS anonymous.
      2: Parameters are still capable of being added
        - Parameters go in the () as they would with a normal function, BUT if we only have 1, no more or less, parameter, we do not need (). If we have no parameters we are still required to put ().
      3: "How we see an arrow". This is JS syntax that says we are about to process a function.
      4: The code the arrow function will run, or execute. i.e "Do This"
    */
    let arrow = (x) => console.log(x);
    arrow(10);
    //! CONCISE vs BLOCK BODY
    // CONCISE BODY
    // When we have a simple return, or response, from our arrow function, it makes sense to write it in a concise, simplified way. When we use a concise body arrow function, the "return" statement is implied (meaning we do not have to write it)
    // return x + y
    // implied return
    let conciseBody = (x, y) => x + y;
    let result = conciseBody(1, 2); // return sets conciseBody(1,2) = 3
    console.log(result);
    let slightlyComplexConcise = (x, y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`)
    slightlyComplexConcise(3, 1);
    slightlyComplexConcise(2, 1);




    let callback = (num) => {

        for (var i = 0; i <= 100; i++) {
            if (i === 0) {
                console.log(i + " the number is even");
            } else if(i > 100 === 0) {
                console.log(i + 'what is this')
            }
            else if (i % 2 === 0) {
                console.log(i + " the number is even");
            }
            else {
                console.log(i + " the number is odd");
            } else if(i > 100 === 0) {
                console.log(i + 'what is this')
            }


        }
    }
}

callback([101])