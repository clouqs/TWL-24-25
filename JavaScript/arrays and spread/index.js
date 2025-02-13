let fruits = ["Banana", "Orange", "Apple", "Mango"]; //creates an array of fruits
 //changes the first element of the array to "Kiwi"
console.log(fruits);

/*
fruits[0]="Kiwi"; //changes the first element of the array to "Kiwi"
fruits.push("Lemon"); //adds "Lemon" to the end of the array
fruits.pop(); //removes the last element of the array
fruits.unshift("Pineapple"); //adds "Pineapple" to the beginning of the array
fruits.shift(); //removes the first element of the array
fruits.length; //returns the length of the array (number of elements)
*/

for(let i = 0; i < fruits.length; i++) { //iterates through the array
    console.log(fruits.reverse());
}



//spread operator:
let numbers = [1, 2, 3, 4, 5]
let maximum = Math.max(...numbers) // spread operator to pass the array as individual arguments


console.log(maximum); //prints the maximum number in the array