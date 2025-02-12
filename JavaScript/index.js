let DecreaseBtn = document.getElementById('Decrease');
let ResetBtn = document.getElementById('Reset');
let IncreaseBtn = document.getElementById('Increase');
let countLabel = document.getElementById('countLabel');
let count = 0;

IncreaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

DecreaseBtn.onclick = function() {
    count--;
    if (count < 0) {
        alert("You can't go below 0!");
        count = 0;
    }
    countLabel.textContent = count; // Update after checking
};

ResetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
