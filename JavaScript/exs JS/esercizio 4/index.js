document.getElementById("btn").onclick = function() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let num1 = Number(a);
    let num2 = Number(b);
    let c = num1 + num2;
    document.getElementById("result").textContent = "The sum is: " + c;
}