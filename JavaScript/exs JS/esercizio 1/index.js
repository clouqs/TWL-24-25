document.getElementById('btn').onclick = function() {
    let text = document.getElementById('text').value; 
    let len = text.length; 
    document.getElementById("result").innerHTML += " " + len; 
};
