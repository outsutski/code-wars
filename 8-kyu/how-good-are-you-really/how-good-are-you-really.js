function betterThanAverage(classPoints, yourPoints) {
  let l = classPoints.length
  let sum = classPoints.reduce((acc, curr) => acc + curr, 0)
  return yourPoints > sum/l ? true : false
}
​