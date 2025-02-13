document.getElementById("send").onclick = function() {
    let len = document.getElementById("username").value;
    len = len.length;
    if(len < 3) {
        alert("Inserire almeno 3 caratteri");
    }



}