function displayValue(val) {
    document.getElementById("calculator-screen").value += val;
}

document.onkeydown = function (event) {
    let key = event.key;
    if (key >= '0' && key <= '9' || key === '+' || key === '-' || key === '*' || key === '/' || key === '.' || key === '%') {
        displayValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearScreen();
    } else if (key === 'Backspace') {
        backspace();
    }
};

function calculateResult() {
    let expression = document.getElementById("calculator-screen").value;
    try {
        let result = math.evaluate(expression);
        document.getElementById("calculator-screen").value = result;
    } catch (error) {
        document.getElementById("calculator-screen").value = "Error";
    }
}

function clearScreen() {
    document.getElementById("calculator-screen").value = "";
}

function backspace() {
    let screenValue = document.getElementById("calculator-screen").value;
    document.getElementById("calculator-screen").value = screenValue.substring(0, screenValue.length - 1);
}