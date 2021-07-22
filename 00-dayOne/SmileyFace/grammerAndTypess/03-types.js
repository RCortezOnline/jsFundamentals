/*
    DATA and STRUCTURE TYPES

    - Primitive Data Types:
    - boolean
    - undefined
    - string
    - number
    - bigInt *
    - symbol *
    - null
    - object
    - function

*/

/*
    BOOLEAN

    A boolean had two possible values: true and fasle
*/

let on = true;
let off = false;

console.log(on);
console.log(off);


/*
    NULL

    A null value is an empty value. Think of it as an empty container that has space to fill/ Note:
    null and undefined are 2 different things
*/

let empty = null;
console.log(empty);

/*
    UNDEFINED

    No value has been assigned to a container and doesn't even act as an empty container
*/

let unknown;
let undef = undefined;

    // Whats the difference between null and undefined?

    // -Null is like a container with nothing in it
    // - Undefined is a variable that has never been set, or it hasn't been created yet

/*
    NUMBERS

    Literally just numbers
*/

// let degrees = 80;
// console.log(degrees);

// let precise = 9999999999999; //15 numbers (digits) is the limit before js rounds up and it gets messy
// console.log(precise);

// let rounded = 99999999999999;
// console.log(rounded);

/*
    Strings 
    Strings represent text and are wrapped in either songle or double quotes.
*/
let doubleQuotes = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = 'I said, "How cool is that"';
let bothQuotesAlt = "I then said, 'It is pretty cool right?";
console.log(bothquotes);
console.log(bothQuotesAlt);

const contractions = "now you can't run into any issues";
const contractions2 = 'now you can\'t run into any issues';

// Numbers and Strings
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);

// we can use an operation called 'typeof' to return a string of the variable's type

console.log(typeof addThese);
console.log(typeof addTheseAlso);

let addTest = 150 + '100';
console.log(addTest);

/*
OBJECTS

Objects are used to store many values instead of just on. 
Conider them as a collection of different variables in one container
denoted by curly brackets*/

let frodo ={
    //an object has many properties inside of it
    race: 'Hobbit', //string
    //name : value
        //we must separate properties in an object with a comma
    rings: 1, //number
    sting: true //boolean
}

console.log(frodo);
console.log(typeof frodo);
console.log(frodo.rings); //dot Notation example if you want the value of an object

/* 
    ARRAYS

    Conatiners that hold a list of items
    denoted by square breackets : []
    all items are within the square brackets
    regardless of the data typem all items are seperated by commas
*/

let arrayList = ['[position1', 'position2', 'position3'];
console.log(arrayList);

let anotherExample = ['muffins', 'pizza toppings', 'true', 17, 9007199254740992, false, null, undefined];
console.log(anotherExample); // An array will put anything we want in there. We give it and it will put it
//An array is an object but it fucntions defferntly than the other one before
console.log(typeof anotherExample);

/*
    ADDITION vs CONCATENATION

    JS sees the  + symbol in two different ways
    -  When we use it with numbers , it will use the built-in math functionality
    - When we use it with strings, it will ignore the math functionality and concats, or combines, the two strings into one
*/

let strings = 'one' + '' + 'is a number';
console.log(strings);

let concatDiff = 1050+ '100';
console.log(concatDiff);
console.log(typeof concatDiff); // anumber can be inside of a string , but a string cannot be inside of a number. The string takes place and its a string


let firstName = 'Ricky';
let lastName = 'Cortez';
let houseNumber = 309;
let street = 'Main';
let city = 'Frankfort';
let state = 'IN';
let zipcode = 46041;


console.log(firstName, lastName, houseNumber, street, city, city, state, zipcode);

/*
    STRING: PROPERTIES

    Properties are qualities associated with a data type
    strings have properties, or qualities, associated with them
    the length of a string is a property
*/

let myName = 'Jerome';
console.log(myName.length);

/* 
    STRING: METHODS

    Methods are tools that can help us manipulate data
    .property .method() 
    no parens^  parans^
*/

let myNameIs = 'Jerome';
console.log(myNameIs.toUpperCase());

let home = 'My home is in Noblesville';
console.log('Includes Method:', home.includes('Noblesville'))


let str = 'This sentence will be split into individual parts';

let words = str.split(' ');
console.log(words[0],words[1], words[3], words[4], words[5], words[6], words[7], words[8]);

let chars = str.split('');
console.log(char[8]);

let strCopy = str.split();
console.log(strCopy); 

let x = 25; 
