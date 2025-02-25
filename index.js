document.addEventListener("input", function(){
    let number = document.getElementById("NumberPpl").value;
    if (number > 4) {
        alert("The maximum number of 'persons' must be 4");
        document.getElementById("NumberPpl").value = 4;
    }
})
document.getElementById("NumberPpl").setAttribute("min", 0);