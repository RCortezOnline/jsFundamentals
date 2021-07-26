/*
- Populating and Referring
-Methods
- Length
-Iterating
*/

// POPULATING AND REFERRING

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);
/*
-when we call an array, we can append, or add, swuare brackets onto the end of the array name with the index of the value we want to referrence. This is known as SQUARE BRACKET NOTATION

-JS starts counting at 0, so when we console log 'list [1]'
 we should see 'banana'
*/
 let sophie = "Hello Sophie"
 let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Pheonix', 25, true, ['Matthew', 'SHake and Bake', 'Sophie'], 15 % 4];//second brackets counts as a number in this case 9
 console.log(students[9][1]); //it solves for 10 because IT IS ASKING THE VALUE OF IT AND NOT THE OBJECT INSIDE. IF IT WAS A STRING IT WOULD SHOW THAT " '' ""
console.log(typeof students);
console.log(students instanceof Array);// instanceof doesn't just check for arrays so we have to specify
//the instanceof operater is used to check the type of an object at run time. Remember arrays are technical objects
console.log(students[4]);
console.log(students[7]);
console.log(students[9][1]);
console.log(`Hello ${students[9][2]}`);//interpolate
console.log(`Hello`, students[9][2]);// console log 2 things
console.log(`Hello` + students[9][2]);// concatinate

//the key in an arrary is the index number or place of the number in the brackets starting at 0


/* 
    ARRAY METHODS

    we can call on multiple different array methods that will allow us to mainpulate arrays as we need to.
*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//Add to our array
food.push('Pizza');//adds items to the end of the array
console.log('push:', food);


food.pop()//.pop only removes the last item in the array
console.log('pop', food);

food.shift();//removes the first item in an array
console.log('shift', food);

food.unshift();
console.log('unshift:', food);

food.splice(2, 1, 'Bananas');//remove and insert item(s) to the beginning of an array
//(position to remove, how many to remove, what to add in that location)
console.log('splice:', food)

food .splice(1, 0, 'Ice cream');
console.log('second splice:', food);

//LENGTH

let long = [01,2,3,4,5,6,7,8,9,10];
console.log(long.length); // 11

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length)//6

/*
ITERATING

forEach-

- the forEach() method execites a provided function once for each element in an array
- the forEach() method does the same thing as a for loop or a for of loop --> both itherate over the properties in an array

-provide a callback function that has up to 3 arguments:
1- value
2- The index
3- The array object itself
*/

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo', 'green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

for (let i = 0; i< colorList.length; i++) {
    console.log(colorList[i]);
}

colorList.forEach(color => console.log(color)); // callback function is a functionb that is either called or passed as a parameter to antoher function 

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo', 'green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

let logItem = item => console.log(item);
colorList.forEach(logItem);



let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo', 'green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

colorList.forEach((item, index) => {
    console.log(item);
    console.log(index);
})