/*
    CONDITIONALS

    FALSEY VALUES:
        A falsey value iss a value that considered false when
        encounter in a boolean context. There are 6 falsey values in JS:
        - false
        - 0
        - "", '', ``
        - null
        - undefined
        - NaN (not a number)

    What does this mean? Whenever JS is expectiong a boolean value and 
    is given one of these 6, it is evaluated as false

    side note: there are also Truthy values in JS, which tend to be much less limited. 
    Examples inlude: true, {}. [], 42, "false"
    Bacically if it has a value it will come out as true
*/

/*
IF STATEMENTS

When we use comparison operators, we typically are asking if we can move on to the next section of code. 
"If" something is true, do "this thing"
*/

   let     light= 'on';
//keyword  expression 
   if        (true) {
    //code to run if the expression evaluates to true
    console.log('truthy Test');
}

//Telling JS the condition is false so nothing will run because there is nothing there
if(false) {
    console.log('Falsey Test');
}

let light = 'on';

if(light = 'on'){
    console.log('The light is on');
}

let weather = 65;
let rain = true;

if(weather < 70 && rain == true){
    console.log('Maybe wear a jacket');
}

let batman = 'is the night';
let bruce = true;

if(batman && bruce){
    console.log('Batman!');
}


/*
IF ELSE

we can think if this as not only providing an answer if our 
condition evaluates to be trie, but also one if it ends up being false

*/

let today = 75;

if(today < 70) {
    // string interpolation
    console.log('It\'s ${today}, wear a jacket');
} else {
    console.log('It\'s ${today}. No jacket needed');
}


/*
ELSE IF

this is a condition that will be checked if the above condition was not met
*/

let cooktime = 40;

if(cooktime === 45) {
    console.log('Let us feast!');
} else if(cooktime >= 30) {
    console.log(`It had only been ${cooktime} minutes. Wait another 5- 15 minutes.`);
} else if(cooketime >= 20) {
    console.log(`It has only been ${cooktime} minutes. Wait another 10 - 25.`);
} else if(cooktime > 45) {
    console.log(`It has only been ${cooketime} minutes??? Might need a glass of water with this one!`);
} else {
    console.log(`It has only been ${cooketime} minutes. Perhaps we could at least try cooking it...`);
}

Let age = 26;

if(age <= 17) {
    console.log('You can Vote!');
} else if(age >= 21) {
    console.log('You can drink!');
} else  if(age >= 25) {
    console.log('You can rent a car');
}

/*
TERNARIES

THey are if/else statements but they look weird!

*/

let myName = 'Jerome';

if(myName === 'Jerome') {
    console.log(`Hi, ${myName}!`);
}
    console.log(`Not sure I know ${myName}`);



//condition ? if true : else result

myName === 'Jerome' ? console.log(`Hi, ${myName}!`) : console.log(`Not sure I know #{myName}`);

let hero = 'Batman';
let villain = 'Mr. Freeze';

hero == 'Batman' && villain == 'Riddler' ? 
console.log('what had a head and a tail but no body') : 
hero == 'Batman' && villain == 'Joker' ? 
console.log('Why so serious?') : 
hero == 'Batman' && villain == 'Mr Freeze' ? 
console.log('Ice to meet you!') : 
console.log(`${hero}is the night!`);

let lampOn= false; 
let daytime = true;

lampOn == true && daytime != true ?
console.log('The lamp is on during the night') :
lampOn != true && daytime != true ?
console.log('The lamp is off during the night') :
lampOn == true && daytime == true ?
console.log('The lamp is on during the day') :
lampOn != true && daytime == true ?
console.log('The lamp is off during the day') :
console.log('What lamp?');

let instructor = 'Jerome';

switch(instructor) {
    // if instructor === 'Jerome'
    case 'Jerome':
         console.log(`${instructor} is a part of the Web development Team`);
         break;
    case 'Summer':
        console.log(`${instructor} is a part of the Web development Team`);
        break;
    case 'Josh'
    console.log(`${instructor} is a part of the Software development Team`);
        break;
    default: console.log(`${instructor}`)
//else {}
}

let staff = 'Jerome';

switch(staff) {
    case 'Jerome':
    case 'Summer':
    case 'Levi':
    case 'Adam':
    case 'Hustin':
        console.log(`${staff} is a part of the Web Development Team`);
        break;
        case 'Josh':
        case 'Amanda':
        case 'Casey':
        case 'Junior':
            console.log(`#{staff} is a part of the Software Development Team`);
            break;
            default:
                console.log(`Sorry, I can't find what ${staff} teaches`);
                break;
}

//switch statements
let switchConditional = 'example';

switch(typeof switchConditional == 'string' || typeof switchConditional == 'boolean'){
    case true:
    console.log(`${switchConditional} is a string or boolean`)
    break; 
    default:
        console.log(`${switchConditional} is NOT a string or boolean`);
}

// When we use || (or) onoly one side of the || needs to bge true for the expression to be true

//when we use && (and) Both sides of the && need to be true for the expression to be true


50
//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let grade = 66;

switch(typeof grade == 66 || typeof grade == 100){
    case true:
    console.log(`${grade} Passing Grade!`)
    break; 
    default:
        console.log(`${grade} Failing Grade!`);

    }

//! Challenge
/*
  Take this if else statement and translate it to both a ternary and a switch statement
*/
let character = "";
if(character === 'Michael'){
  console.log('That\'s what she said!');
} else if(character === 'Dwight') {
  console.log('It\'s not weed! It\'s hemp!');
} else if(character === 'Jim') {
  console.log('Bears. Beets. Battlestar Galactica.');
} else {
  console.log('*slow camera zoom*');
} 


