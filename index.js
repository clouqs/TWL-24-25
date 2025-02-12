// Log "Hello World" to the console
console.log("Hello World"); // stampa "Hello World" sulla console

console.log("I like pizza");

//window.alert("Hello World"); // mostra un alert con il testo "Hello World"

//window.alert("I like pizza");

//questo è un commento :)
//console.log("Hello World");
/* questo anche è un commento */

//document.getElementById("myH1").textContent = "Hello!!"
//document.getElementById("myP").textContent = "I like pizza" //il testo di js è più forte di quello di html

/*----------------------------------------------*/

//Variables and operations
//1. dichiarazione   let x;
//2. assegnazione    x = 5;

let age = 25;
let price = 10.99;

console.log(age);
console.log(20**2);
/*
// operator precedence:
//1. ()
//2. **
//3. * / %
//4. + -
*/

/*----------------------------------------------*/

//User Input

//Easy way:


let username;
/*
username = window.prompt("Please enter your username");
console.log(username);
*/

//Professional way:


document.getElementById("button").onclick = function() {
    username = document.getElementById("inpt").value;
    console.log(username);
}