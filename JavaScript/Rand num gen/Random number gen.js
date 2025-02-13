const min = 1
document.getElementById("btn").onclick = function() {
    let randNum = Math.trunc(100*(Math.random()));
    console.log(randNum);
    document.getElementById("number").textContent = randNum;
};