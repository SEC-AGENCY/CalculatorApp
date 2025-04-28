let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let currentInput = "";
let operator = "";
let firstNumber = "";
let secondNumber = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (!isNaN(value)) { 
            currentInput += value;
            display.textContent = currentInput;
        } else if (value === "C") {
            currentInput = "";
            operator = "";
            firstNumber = "";
            secondNumber = "";
            display.textContent = "0";
        } else if (value === "=") {
            secondNumber = currentInput;
            display.textContent = eval(`${firstNumber} ${operator} ${secondNumber}`);
            currentInput = display.textContent;
        } else {
            operator = value;
            firstNumber = currentInput;
            currentInput = "";
        }
    });
});
