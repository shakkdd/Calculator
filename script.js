let isCalculation = false;
let firstNumber = null;
let secondNumber = null;
let operator = null;
let screenValue = "";

const screen = document.querySelector(".screen");
const operatorBtn = document.querySelectorAll(".operationButton");
const numBTN = document.querySelectorAll(".numButton");
const deleteBtn = document.querySelector(".deleteButton");
const chageValuebtn = document.querySelector("changeSignButton");
const clearBtn = document.querySelector(".clearButton");
const egalBtn = document.querySelector(".calculateButton");
const decimalBtn = document.querySelector(".decimalButton");

function addNumber(num1, num2){
    return num1+num2;
}

function substractNumber(num1, num2){
    return num1-num2;
}

function multiplyNumber(num1, num2){
    return num1*num2;
}

function divideNumber(num1, num2){
    return num1/num2;
}

function operation(operation, num1, num2){
    switch (operation) {
        case "+":
            return addNumber(num1, num2);
            break;
        
        case "-":
            return substractNumber(num1, num2);
            break;

        case "*":
            return multiplyNumber(num1, num2);
            break;
        
        case "/":
            return (num1, num2);
            break;
    }
}