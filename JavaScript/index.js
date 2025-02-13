//method chaining = calling multiple methods on the same object in one concise statement
//without method chaining
/*
let username = window.prompt("Enter your username: ");
username = username.trim();
let letter = username.charAt(0);
letter=letter.toUpperCase();
let extrachars = username.slice(1);


document.getElementById("head").textContent = "Your username is: " + letter + extrachars;

*/
//with method chaining

let username = window.prompt("Enter your username: ");
username = username.trim().charAt(0).toUpperCase() + username.slice(1); 
document.getElementById("head").textContent = "Your username is: " + username;