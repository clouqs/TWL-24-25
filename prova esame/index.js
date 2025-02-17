document.addEventListener('DOMContentLoaded', function() {
    let textarea = document.getElementById("text");

    textarea.addEventListener("input", function() {
        let length = textarea.value.length;
        document.getElementById("counter").textContent = length;

    });
});

let selector = document.getElementById("selector");
if (selector.value === document.getElementById("opt").value){
    textarea.setAttribute("maxlength", "200");
}
else{
    textarea.setAttribute("maxlength", "100");
}