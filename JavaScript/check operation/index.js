// Selecting elements
const myCheckBox = document.getElementById("checkbox1");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

// Submit button functionality
submit.onclick = function() {
    if ((radio1.checked || radio2.checked || radio3.checked) && myCheckBox.checked) {
        result.textContent = "Radio and checkbox are checked";
    } 
    else if (myCheckBox.checked) {
        result.textContent = "Checkbox is checked";
    } 
    else if (radio1.checked || radio2.checked || radio3.checked) {
        result.textContent = "Radio button is checked";
    } 
    else {
        result.textContent = "Checkbox is not checked";
    }
}

// Reset button functionality
reset.onclick = function() {
    result.textContent = ""; // Clear result text
    myCheckBox.checked = false; // Uncheck checkbox
    radio1.checked = false; // Uncheck radio buttons
    radio2.checked = false;
    radio3.checked = false;
};
