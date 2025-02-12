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
    document.getElementById("myH1").textContent ="Hello " + username;

}