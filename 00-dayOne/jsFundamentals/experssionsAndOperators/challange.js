let grade = 65;

switch (true) {
    case grade >= 89:
        console.log(`Your grade is ${grade}, you have a A`);
        break;
    case grade >= 79:
        console.log(`You're grade is ${grade}, you have a B`);
        break;
    case grade >= 66:
        console.log(`You're grade is ${grade}, you have a c`);
        break;
    case grade >= 59:
        console.log(`You're grade is ${grade}, you have a d`);
    case grade >= 0:
        console.log(`You're grade is ${grade}, you have a f`);
        break;
    default: console.log('Please insert a value');
        break;
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

let character = 'Dwight';

character === 'Michael' ? console.log('Thats what she said') :
character === 'Dwight' ? console.log('It\'s not weed. its hemp') :
character === 'Jim' ? console.log('Bears beats, battlestar galactica') :
console.log('slow camera zoom');


//! Ternary 

let character = 'Michael';

switch (true) {
    case character == 'Michael'
        console.log(`That's what she said${character}`);
        break;
        case character:
            console.log(`it's not weed its hemp! ${character}`);
        break;
        case character:
            console.log(`Bears. Beats. Battlestart Galactica ${character}`);
            break;
            default:
                console.log('*slow camera zoom');
}

    default:
        break;

 
//  ! SWITCH
let character = 'Michael';
switch(true ){
    case 'Michael':
    console.log(`That's what she said ${character}`);
        break;
    case 'Dwight':
        console.log(`it's not weed its hemp! ${character}`);
        break;
    case 'Jim':
        console.log(`Bears. Beats. Battlestart Galactica. ${character}`);
        break;
    default:
            console.log('*slow camera zoom');
}

