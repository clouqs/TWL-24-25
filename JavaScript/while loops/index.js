// while loop = ripete un blocco di codice fintanto che la condizione specificata è vera
let loggedIn = false;
let username;
let password;


while(!loggedIn) {
    username = prompt("Enter your username: ");
    password = prompt("Enter your password: ");
    if(username ==="" && password === "")
    {
        alert("Username and password cannot be empty");
    }
    else if (username ==="" || username == null)
    {
        alert("Username cannot be empty");
    }
    else if (password ==="" || password == null)
    {
        alert("Password cannot be empty");
    }
    else {
        loggedIn = true;
        document.getElementById("head").textContent = "Your username is: " + username + " and your password: " + password;
    }
}