function solve(s){
    let upper = 0
    let lower = 0
    for (let char of s){
      if (char >= 'A' && char <= 'Z'){
        upper++
      }else if(char >= 'a' && char <= 'z'){
        lower++
      }
    }
  const x = lower >= upper ?  s.toLowerCase() : s.toUpperCase()
  return x
}