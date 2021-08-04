/*
Spread Operators


*/

const nameOne = ['Summer', 'Jerome'];
const nameTwo = ['Adam', 'Hustin'];
const copiedNames = ['Levi', nameOne, nameTwo];
console.log(copiedNames);

const copiedNamesSpread = ['Levi', ...nameOne, ...nameTwo];
nameOne.unshift('Justin');

console.log('Altered:', nameOne, 'Spread:', copiedNamesSpread);

// ..nameTwo (cannot use it if were are not doing anything with it)

console.log(nameTwo);
console.log(...nameTwo);


/*
...numbers
*/

console.log(Math.min(1, 5, -3));
const prices = [10.99, 5.99, 3.50, 2.49, 5.49];
console.log(Math.min(prices));

console.log(Math.min(...prices));


/*
...objects
*/


/*
-primitive variable = primitive value
let x = 10
let y = 'abc'
let z = null
variables   values
x              10
y              'abc'
z              null
---------------------------------------------------

let x = 10 
let y = 'abc'

let a = x
let b = y

console.log(x, y, a, b) -> 10, 'abc', 10, 'abc'

a = 5      
b = 'xyZ'
console.log(x, y, a, b); nothing will change if we change the values of 'a' and 'b'


- data types thjat are pazssed reference:
-Array
-Function
-Objects
*all 3 are technically objects to JS


- non primitive variables are given a rfeference to the caluie they 'conatin' - this value reference 'points' to a location in memory
-----------------------------------------------------------
let arr = []
arr.push(1)

Variables   Values  Address   Object
arr         <#001>  #001       []
arr         <#001>  #001       [1]

-------------------------------------------------------------
let refernce  = []
 let refCopy =  reference

 Variables   Values  Address   Object
 reference   <#001>    001      [1]
refCopy      <#001>     
*/









/*
Array destructuring

- allow us to 'unpack' values from arrays or porperties from opbjects
-similar syntax tro array literals BUT ius on the left side of the assignement operator
- this will define what values to unpack
0- great for pulling information fo an array/object and assigning that data to it's own variable
*/

const boardGames = ['catan', 'Monopoly', 'Clue'];
// console.log(boardGames[0]);

// array destructuring syntax 
const [gameOne, gameTwo, gameThree] = boardGames
console.log(gameOne);
console.log(gameTwo);
console.log(gameThree);

//if i don't define gameThree, it will ignore the value
console.log(gameThree);


/*
Rest Operators

-using the rest operator will look almost exactly like using the spread operator

-spread expands an array into it's elements
-Rest collects multiple elements and condenses them into one element
-Rest MUST be the last element defined using array destructuring
*/

const hitchhikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {day: 'Thursday', answer: 42}]

let [charOne, charTwo, ...otherInfo] = hitchhikersGuide;
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);

const harryPotter = ['Snape', 'Moaning Myrtle', 'Harry', 'Ron Weasly', 'Hermione', 'Dumbledore'];

let [firstName, secondName, thirdName] = harryPotter;
console.log(firstName, secondName, thirdName);

let [first, second, ...maincharacters] = harryPotter;
console.log(first, second, ...mainCharacters);



/*
Object Destructuring
*/

const game = {
    title: 'Legend of Zelda: Breathe of the Wild',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii u']
}

const {title, developer, platforms} = game
console.log(title);
console.log(developer);
console.log(platforms);

const games = [
    {
        title: 'Legend of Zelda: Breathe of the Wild',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii u']
    },
    {
        title: 'Bloodborne',
    developer: 'From software',
    platforms: ['PS4']
    },
    {
        title: 'Stardew Valley',
    developer: 'ConcernedApe',
    platforms: ['PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintendo', 'Switch', 'PSVita', 'iOS', 'Android']
    }
]

const [{title: gameOne, developer: devOne},  gameTwo, {title: gameThree}] = games;
console.log(gameOne, devOne);
console.log(gameTwo);
console.log(gameThree);


const games = [
    {
        title: 'Legend of Zelda: Breathe of the Wild',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii u']
    },
    {
        title: 'Bloodborne',
    developer: 'From software',
    platforms: ['PS4']
    },
    {
        title: 'Stardew Valley',
    developer: 'ConcernedApe',
    platforms: ['PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintendo', 'Switch', 'PSVita', 'iOS', 'Android']
    }
]

for({title, developer} of games){
    console.log(`${title} is a developed by ${developer}`);
}