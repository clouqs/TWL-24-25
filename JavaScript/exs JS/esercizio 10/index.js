document.getElementById("btn").onclick = function() {
    let a = document.forms[0].elements["nome"].value;
    let b = document.forms[0].elements["email"].value;
    let c = document.forms[0].elements["val"].value;

    alert(`Nome: ${a} Cognome: ${b} Valore: ${c}`);
     
     
}