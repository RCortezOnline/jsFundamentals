let challenge = 100;

for (x; x * y) ==> {
    console.log(`${x} FIZZ`)
} else if (x; x * 5) => {
    console.log(`${x} BUZZ`)
} else if (x); (x * 3, 5) => {
    console.log(`${x} FIZZ BUZZ`)
}

challenge(x, y)

for (let i = 0; i <= 100; i++) {
    console.log(i)
    if (i % 3 == 0)//equals 0 because the remainder or what is left after % will leave nothing (3 into 15 i 5 leaving 0 as the ramainder)
        console.log(`FIZZ`)
    if (i % 5 == 0)
        console.log(`BUZZ`)
}

for (let k = 1; k <= 100; k++) {
    if (k % 3 == 0 && k % 5 == 0) {
        console.log(`FIZZ BUZZ`);
    } else if (k % 3 === 0) {
        console.log('FIZZ');
    } else if (k % 5 == 0) {
        console.log('BUZZ');
    } else {
        console.log(k);
    }
} //code will look for the first correct answer so if the top one is 15 it will look for 15 if it is 5 it will look for 5 


Challenge #1
Write a function that accepts two names as parameters, and then prints the full name to the console.
Challenge #2
Write a program that prints all numbers from 0 - 100.
for multiples of 6, instead of the number, print 'Fizz'
for multiples of 8, instead of the number, print 'Buzz'
for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'
Challenge #3
Write a function called findPerimeter() that accepts 2 parameters called: "length" and "width".
The function should return an interpolated string of "True.  The perimeter is ___" if the perimeter is over 20.
The function should return an interpolated string of "False.  The perimeter is ___" if the perimeter is under 20.
This function should be active.
Challenge #4
Create an object literal called "library".
The library object will contain 3 properties: name, address, sections.
Name and address will both hold values that are strings.This information can be fabricated.
Sections will be an object that will store a property called "collections", which is an array of more objects.You should include at least 2 objects inside the collections array.
the objects stored in the collections array will hold properties of classification, count, and aisle.
both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.


 /*
  CHALLENGE:
  Write a for loop that counts from 1 to 100
    - for numbers that are evenly divisible by 3, print: 'FIZZ'
    - for numbers that are evenly divisible by 5, print: 'BUZZ'
    - for numbers that are evenly divisible by BOTH 3 and 5, print: 'FIZZ BUZZ'
  reminder: a number is evenly divisible by another number when the remainder is 0
*/
for(let i = 0; i <= 100; i++) {
    console.log(i)
    if(i % 3 == 0) {
      console.log('FIZZ');
    }
    if(i % 5 == 0) {
      console.log('BUZZ');
    }
  }
  for(let k = 1; k <= 100; k++) {
    // if(k % 3 == 0 && k % 5 == 0) {
    if(k % 15 == 0) {
      console.log('FIZZ BUZZ');
    } else if(k % 3 == 0) {
      console.log('FIZZ');
    } else if(k % 5 == 0) {
      console.log('BUZZ');
    } else {
      console.log(k);
    }
  }
  let func = (x,y) => console.log(x,y);
  func('peoples', 'names');
  function writtenOutOne(x, y) {
      console.log(x, y)
  }
  writtenOutOne('person1', 'person2');
  for(let x = 0; x <= 100; x++){
      // if(x % 24 == 0){
    if(x % 6 == 0 && x % 8 == 0) {
          console.log(x,'FIZZ BUZZ')
      } else if(x % 6 == 0) {
          console.log(x,'FIZZ')
      } else if(x % 8 == 0) {
          console.log(x,'BUZZ')
      } else {
          console.log(x)
      }
  }
  function findPerimeter(length, width){
    let x = length *2 + width * 2 ;
    if (x > 20){
    console.log(`True.  The perimeter is ${x}`)
    } else {console.log(`False. The perimeter is ${x}`)
    }
  }
    findPerimeter(5, 5.1);
  let library = {
      name: 'string i guess',
      address: 'strings in there',
      sections: {
          collections: [
              {
                  classification: 'one',
                  count: 2,
                  aisle: 'value for it',
              },
              {
                  classification: 'two',
                  count: 3,
                  aisle: 'value for it',
              }
          ]
      }
  }
  console.log(library)
  console.log(library.sections.collections)
