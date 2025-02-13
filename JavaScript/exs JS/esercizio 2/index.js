document.getElementById("btn").onclick = function() {

    //uppercase
    let b = document.getElementById("text").value;
    b = b.toUpperCase();
    document.getElementById("text").value = b


    //counter
    let c = document.getElementById("text").value;
    c = c.length;
    document.getElementById("result").textContent = "Counted words: " + c
}

