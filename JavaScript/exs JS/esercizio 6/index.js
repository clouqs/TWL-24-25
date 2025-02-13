document.getElementById("btn").onclick = function() {
    let a = document.getElementById("pswd1").value;
    let b = document.getElementById("pswd2").value;
    if (a != b) {
        alert("Password not matching");
    } else {
        alert("Password matching");
    }
}