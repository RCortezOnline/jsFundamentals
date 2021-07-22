// LOOPS

/*
    Loops allopwsd us to fo over a clock of inforimation or code in a determined
    amount of cycles. It's important to note that it is possible for us to write code without declaring an endpoint

    Loops help us repeat a process without writing alot of code.

*/

/*
STRUCTURE

We have to setup our loops in a way that we can: 
- See where we are in a loop
- Consider what sort of condition we want to run it against
- Note when we are done with that condition and move on to the next interation

We need to:
1- Create an Index
2- Run a Condition
3- Change to the indexing cariable (execution of condition)
*/

// Let's count to 10

for(let i = 0; i <= 10; i++){
    console.log(i);
}


//We state our loop with a 'for' . Within this function, we are  injecting some parapmeters that JS 
// will run against. index; condition, change index -> result.


// Within our parameters, we are stating a index declaration to 0. This is our baseline. 
// We move on to asking if that variable
// is less than or equal to the number 10, take that set number ad add 1 to it. Once that's 
// processed, return that value (in this case 'console.log' of that number). Once our condition
// is met, we return a FALSE which ends our loop

// This is important to note:
// for(<create an index variable); <run a condition>; <change the index>; {
//     <return results>
//     <continue until a condition is met>
// }

// // If we don't indicate what our consition is, the loop will not have a finish line and thus run \
// until we have to force it closed. Thus creating an infinite loop

// Infinite Loop!

for(let i = 0; i++){
    console.log(i);
}

for(let i = 2; i > -10; i -=4) {
    console.log(i)
}

// We aren't limited by positive or negative numbers. We can cycle through variables assigned with strings.

let word = 'supercalifragilisticexpeialidocious'

for(let b = 0; b < word.length; b++) {
    console.log(b, word[b]);
    //1- We set a value of each index and are displaying that
    // 2- We set to display the value within the object of word. Eacher character that is
    //assigned to the character or 'word' is provided an index value and this is how we are 
    //cycling through it
    console.log(`The letter ${word[b]} is in position: ${b}`);
}

/*
FOR IN LOOPS

With  for loops, we are seeking an index value and running it 
against a condition. For In Loops do not require an index number.
*/

let city = {
    name: 'Indianapolis',
    pop : 877000,
    speedway: true
}

for(info in city){
    console.log(info);
    // console.log(city.name) //city.info looks for city info becasue we haven't made a value for "info"
    console.log(city[info]);
}

let list = ['milk', 'eggs', 'lunch meat', 'bread', 'bananas'];

for(item in list){
    console.log(list[item]);
}
  

//challenge

let myName = 'Dwight';

for(let index =0; index <= myName.length - 1; index++)
//    console.log(myName[index]);

//    console.log(myName[index].toUpperCase());
//


if(index === 0){
    propCase = myName[index].toUpperCase();
    propCase += myName[index].toLowerCase();
}
console.log(propCase);

// FOR IN VERISION
let myName = 'dwight';

let propCase;

for(index in myName){
index == 0 ? proCase = myName[index].toUpperCase() : propCase += myName[index].toLowerCase();
}

// console.log(propCase);

// let myObject = {
//     string: 'Peter',
//     boolean: true,
//     number: 1
// }
// for(item of myObject){
//     console.log(item);
// }

let indexArray = ['spot 1', 2, true, 'not fifth'];

for(let pos of indexArray) {
    console.log(pos, 'was run through a "for of" loop');
}

/*
*an interable is something that has numbers assigned to it like an array where the first item is assigned a 0, 
the second a 1, and so on... [eg. arrays, Strings]
*/

let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanely', 'Pam'];

for(worker of officeCharacters){
    console.log(worker, 'works too much in the office');
}

if(worker === 'Jim' && worker !== 'Dwight'){
    console.log('Bear. Beats. Battlestart Galactica.');
} 