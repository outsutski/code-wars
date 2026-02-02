function squareDigits(num){
  let n = num.toString().split('')
  n = n.map(e => e * e)
  n = n.join('')
  return Number(n)
}