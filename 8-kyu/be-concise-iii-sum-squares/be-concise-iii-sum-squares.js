function sumSquares(array) {
  return array.map(x => x**2).reduce((acc, x) => acc + x, 0)
}