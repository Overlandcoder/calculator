let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiplty = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;
let operators = ["+", "-", "x", "%"];
let firstNum;
let secondNum;
let operator;
let calculations = 0;

let operate = (num1, num2, operator) => {
  if (!operators.includes(operator)) return "Invalid operator";

  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiplty(num1, num2);
    case "%":
      return divide(num1, num2);
  }
}

function resetNumbers() {
  firstNum = parseInt(screen.textContent);
  secondNum = undefined;
  operator = undefined;
  calculations = 0;
}

const numberButtons = document.querySelectorAll(".number");
const screen = document.querySelector(".screen");
numberButtons.forEach(btn => btn.addEventListener("click", () => {
  let num = btn.textContent;
  if (screen.textContent == 0) {
    screen.textContent = num;
  } else {
    screen.textContent += num;
  }
}))

const clearButton = document.querySelector(".btn-clear");
clearButton.addEventListener("click", () => {
  screen.textContent = 0;
  firstNum = undefined;
  secondNum = undefined;
  operator = undefined;
  calculations = 0;
})

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(btn => btn.addEventListener("click", () => {
  if (!firstNum) {
    firstNum = parseInt(screen.textContent);
  } else {
    secondNum = parseInt(screen.textContent);
  }
  console.log(firstNum);

  operator = btn.textContent;
  if (calculations < 1) {
    screen.textContent = "";
  } else {
    screen.textContent = operate(firstNum, secondNum, operator);
    resetNumbers();
    console.log(firstNum);
  }
  calculations += 1;
}))

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
  secondNum = parseInt(screen.textContent);
  screen.textContent = operate(firstNum, secondNum, operator);
  resetNumbers();
})
