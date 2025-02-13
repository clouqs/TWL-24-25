function fahr2cels(temp) {
    return (temp-32) * 5/9;
}
function cels2fahr(temp) {
    return temp * 9/5 + 32;
}
document.getElementById("btn").onclick = function() {
    let temp = document.getElementById("temp").value;
    let unit1 = document.getElementById("cels2fahr");
    let unit2 = document.getElementById("fahr2cels");
    if (unit1.checked){
        document.getElementById("result").textContent += "" + cels2fahr(temp);
    } else if (unit2.checked){
        document.getElementById("result").textContent += "" + fahr2cels(temp);
    }
}


