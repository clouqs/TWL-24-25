document.getElementById("btn").onclick = function() {
    let randNum = Math.random();
    console.log(randNum);
    document.getElementById("number").textContent = randNum;
};