document.getElementById("form").onsubmit = function(event) {
    let name = document.getElementById("name").value;
    
    if (name.length < 3) {
        event.preventDefault(); // Blocca l'invio del form
        alert("Name must be at least 3 characters long");
    }
}