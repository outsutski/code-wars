function menFromBoys(arr){
  let a = [...new Set(arr)]
  let even = a.filter(x => x % 2 === 0).sort((a ,b) => a-b)
  let odd = a.filter(x => x % 2 != 0).sort((a, b) => b-a)
  return even.concat(odd)
}