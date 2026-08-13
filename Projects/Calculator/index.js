const buttons = document.querySelectorAll("#userinputs");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calc");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        appendToDisplay(button.textContent);
    });
});

clearButton.addEventListener("click", clearDisplay);

calculateButton.addEventListener("click", calculate);

function appendToDisplay(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}


function calculate() {
    let display = document.getElementById("result");

    try {
        let expression = display.value;

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}