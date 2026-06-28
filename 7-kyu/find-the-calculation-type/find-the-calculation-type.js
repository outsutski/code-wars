function calcType(a, b, res) {
  let add = a + b
  let sub = a - b
  let mul = a * b
  return add === res ? "addition" : sub === res ? "subtraction" : mul === res ? "multiplication" : "division"
}