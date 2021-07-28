console.log('Hello from the script tag~!');

//! 1 
console.log(document);
console.log(document.body);
console.dir(document.getElementById('testParagraph'));
document.getElementById('testParagraph').style.color = '#434c8c';

let testPara = document.getElementById('testParagraph');
testPara.style.color = '#434c8c';
testPara.style.backgroundColor = '#666'

console.log((document.querySelectorAll('.sampleClass')));

consoole.log(document.querySelectorAll('p.sampleClass'));

console.log(codumnt.getElemeent('spanTest');)




//challenge
//Move the button into a variable, and when you clock the buytton it will turn blue, or if it is already blue, it will turn red

//1- move the buttoion into a variable
//2- click it, and it will turn bue
//3- if it is blue, turn red


let button = document.getElementById('clickThis');

button.addEventListener('click', ev => {
    // console.log(button.backgroundColor);
    console.log(ev.target.style.backgroundColor);
    // if(ev.target.style.backgroundColor == 'blue'){
    //     ev.target.style.backgroundColor = 'red';
    // } else {
    //     ev.target.style.backgroundColor = 'blue';
    // }

    if(ev.target.style.backgroundColor !== 'blue'){
    ev.target.style.backgroundColor = 'blue';
    } else {
        ev.target.style.backgroundColor = 'red'
    }

})

document.getElementById('clickThis').addEventListener('click', function(event){
    function(event) {
    console.log(event.target);
event.target.style.backgroundColor = '#031bf3'

})




