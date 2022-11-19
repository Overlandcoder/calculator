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
        result.classList.add("small-font");
        return "Cannot divide by 0";
      }
      return divide(num1, num2);
  }
}

function resetValues() {
  firstNum = parseInt(result.textContent);
  secondNum = undefined;
  operations.textContent = "";
  currentOperator.shift();
  result.classList.remove("small-font");
}

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const operations = document.querySelector(".operations");
const result = document.querySelector(".result");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".btn-clear");

numberButtons.forEach(btn => btn.addEventListener("click", () => {
  let num = btn.textContent;
  if (operations.textContent == 0) {
    operations.textContent = num;
  } else {
    operations.textContent += num;
  }
}))

clearButton.addEventListener("click", () => {
  operations.textContent = 0;
  result.textContent = "";
  firstNum = undefined;
  secondNum = undefined;
  currentOperator = [];
  calculations = 0;
})

operatorButtons.forEach(btn => btn.addEventListener("click", () => {
  operator = btn.textContent;
  currentOperator.push(operator);
  
  if (!firstNum) {
    firstNum = parseInt(operations.textContent);
  } else {
    secondNum = parseInt(operations.textContent);
  }

  if (calculations < 1) {
    operations.textContent = "";
  } else {
    result.textContent = operate(firstNum, secondNum, currentOperator[0]);
    resetValues();
  }
  calculations++;
}))

equalButton.addEventListener("click", () => {
  secondNum = parseInt(operations.textContent);
  result.textContent = operate(firstNum, secondNum, currentOperator[0]);
  calculations = 0;
  resetValues();
})
