let isCalculationDone = false;
let screenValue = "";
let firstNumber = null; 
let secondNumber = null; 
let operator = null; 

const screen = document.querySelector('.screen');

function addNumbers(num1, num2){
    return num1 + num2;
}
function subtractNumbers(num1, num2){
    return num1 - num2;
}
function multiplyNumbers(num1, num2){
    return num1 * num2;
}
function divideNumbers(num1, num2){
    if(num1 === 0 || num2 === 0){
        alert("Dividing by 0 is invalid!");
        return 0;
    }
    return num1 / num2;
}

function operate(operation, num1, num2){
    if(operation == "+")
        return addNumbers(num1, num2);
    else if(operation == "-")
        return subtractNumbers(num1, num2);
    else if(operation == "*")
        return multiplyNumbers(num1, num2);
    else if(operation == "/")
        return divideNumbers(num1, num2);
}

function addToScreen(number) {
    if (screenValue === "0" || isCalculationDone) {
        screenValue = number;
        isCalculationDone = false;
    } else {
        screenValue += number;
    }
    updateDisplay();
}

function updateDisplay(){
    screen.textContent = screenValue || "0";
}

function calculate(){
    if(firstNumber !== null && operator !== null){
        secondNumber = parseFloat(screenValue);
        const result = operate(operator, firstNumber, secondNumber);
        screenValue = result.toString();
        updateDisplay();
        isCalculationDone = true;
        firstNumber = null;
        operator = null;
    }
}

const numButtons = document.querySelectorAll('.numButton');
numButtons.forEach(button => {
    button.addEventListener('click', () => {
       addToScreen(button.textContent); 
    });
});

const operatorButtons = document.querySelectorAll('.operationButton');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(firstNumber == null){
            firstNumber = parseFloat(screenValue);
            operator = button.textContent;
            screenValue = "";
       }
    });
});

const equalButton = document.querySelector('.calculateButton');
equalButton.addEventListener('click', calculate);

const clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click', () =>{
    screenValue = "";
    firstNumber = null;
    operator = null;
    secondNumber = null;
    updateDisplay();
});

const delButton = document.querySelector('.deleteButton');
delButton.addEventListener('click', () =>{
    screenValue = screenValue.slice(0, -1);
    if (screenValue === "") screenValue = "0";
    updateDisplay();
});

const decimalButton = document.querySelector('.decimalButton');
decimalButton.addEventListener('click', () => {
    if(!screenValue.includes('.')){
        screenValue += '.';
        updateDisplay();
    }
});

const changeSignButton = document.querySelector('.changeSignButton');
changeSignButton.addEventListener('click', () => {
    if(screenValue !== "0"){
        screenValue = (parseFloat(screenValue) * -1).toString();
        updateDisplay();
    }
});