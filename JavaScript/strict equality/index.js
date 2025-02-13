// = assignment operator
// == equal to
// === equal value and equal type
// != not equal
// !== not equal value or not equal type

let a = 5; // = assignment operator
let b = "5";

console.log(a == b); // true, because == only checks for value equality
console.log(a === b); // false, because === checks for both value AND type equality

console.log(a != b); // false, because != only checks for value inequality
console.log(a !== b); // true, because !== checks for both value AND type inequality