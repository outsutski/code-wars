function calculate(a, operator, b) {
​
switch (operator) {
  case "+":
    return a + b
    break;
  case "-":
    return a - b
    break;
  case "*":
    return a * b
    break;
  case "/":
    return b === 0 ? null : a / b
    break;
  default:
    return null
}   
​
}