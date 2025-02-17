document.getElementById("btn").onclick = function() {
    let c = document.getElementById("ul");
    let a = document.createElement("li");
    let b = document.getElementById("inpt").value;
    a.textContent = b;
    c.appendChild(a); //or append(a)
}
