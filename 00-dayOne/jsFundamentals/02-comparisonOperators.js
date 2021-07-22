// COMPARISON OPERATORS

// EQUAL
'3' == 3;
console.log('3' == 3);
/*
Javascipt is helpful and does something known as coercion when comparing values
-coercoin is the process of converting a value form one type to another
-in the above example, javascript assumed that we were trying to check if '3' is equal to
 the numnber of 3, even though one of our values
is a string and one is an integer

*/

//STRICT EQUAL - This overrides javascript coercion
console.log(3===3); //true
console.log('3'===3); // fasle
// '===' means they are sctritly equal and '==' means they are equal

//NOT EQuAL
console.log('3' != 3); // false

// SRICT NOT EQUAL
'3' != 4;
console.log('3' !=4); //true

//GREATER THAN
3 > 2;

// LESS THAN
2 < 3;

//GREATER THAN OR EQUAL TO
3 >= 2; // not be confused with what we call a fat arrow (=>), which we'll explore later.

//LESS THAN OR EQUAL TO
2 <= 3;

// AND 
2 && 3;

// OR
2 || 3;
