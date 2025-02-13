document.getElementById("btn").onclick = function() {
    let a = document.getElementById("pswd1").value;
    let b = document.getElementById("pswd2").value;
    if (a != b) {
        alert("Password not matching");
    } else {
        alert("Password matching");
    }
}

document.getElementById("showbtn").onclick = function() {
    document.getElementById("pswd1").value;
    document.getElementById("pswd2").value;
    pswd1.setAttribute("type", "text");
    pswd2.setAttribute("type", "text");
    
}



/*
if (pswd1.type === "password") {
        pswd1.setAttribute("type", "text");
        pswd2.setAttribute("type", "text");
        this.textContent = "Hide Passwords"; // Change button text
    } else {
        pswd1.setAttribute("type", "password");
        pswd2.setAttribute("type", "password");
        this.textContent = "Show Passwords"; // Change button text back
    }
*/