let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiplty = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

let operate = (num1, num2, operator) => {
  if (!['+', '-', '*', '/'].includes(operator)) return "Invalid operator";

  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiplty(num1, num2);
    case "/":
      return divide(num1, num2);
  }
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