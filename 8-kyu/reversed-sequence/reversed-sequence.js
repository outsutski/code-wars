const reverseSeq = n => {
  let arr = []
  let a = n
  for(let i = 0; i < n; i++){
    arr.push(a)
    a--
  }
  return arr
};