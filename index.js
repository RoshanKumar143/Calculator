let output = document.getElementById("output");
let currentOutput = "";

function clearOutput() {
    currentOutput = "";
    output.textContent = "0";
}

function sendToOutput(value) {
    if (currentOutput === "0") {
        currentOutput = value;
    } else {
        currentOutput += value;
    }
    output.textContent = currentOutput;
}

function calculateResult() {
    try {
        currentOutput = eval(currentOutput);
        output.textContent = currentOutput;
    } catch (error) {
        output.textContent = "Error";
    }
}