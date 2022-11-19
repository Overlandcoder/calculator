let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiplty = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;
let firstNum;
let secondNum;
let operator;
let currentOperator = [];
let calculations = 0;

let operate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiplty(num1, num2);
    case "/":
      if (num2 == 0) {
        return "Can't divide by 0";
      }
      return divide(num1, num2);
  }
}

function resetValues() {
  firstNum = parseInt(result.textContent);
  secondNum = undefined;
  operands.textContent = "";
  currentOperator.shift();
}

function clearAll() {
  operands.textContent = 0;
  result.textContent = "";
  firstNum = undefined;
  secondNum = undefined;
  currentOperator = [];
  calculations = 0;
}

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const operands = document.querySelector(".operands");
const result = document.querySelector(".result");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".btn-clear");

numberButtons.forEach(btn => btn.addEventListener("click", () => {
  if (result.textContent == "Can't divide by 0") result.textContent = "";
  let num = btn.textContent;
  if (operands.textContent == 0) {
    operands.textContent = num;
  } else {
    operands.textContent += num;
  }
}))

clearButton.addEventListener("click", clearAll);

operatorButtons.forEach(btn => btn.addEventListener("click", () => {
  operator = btn.textContent;
  currentOperator.push(operator);
  
  if (!firstNum) {
    firstNum = parseInt(operands.textContent);
  } else {
    secondNum = parseInt(operands.textContent);
  }

  if (calculations < 1) {
    operands.textContent = "";
  } else {
    result.textContent = operate(firstNum, secondNum, currentOperator[0]);
    resetValues();
  }
  calculations++;
}))

equalButton.addEventListener("click", () => {
  secondNum = parseInt(operands.textContent);
  result.textContent = operate(firstNum, secondNum, currentOperator[0]);
  calculations = 0;
  resetValues();
})
