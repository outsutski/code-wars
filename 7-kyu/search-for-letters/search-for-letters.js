function change(string){
  const s = string.toLowerCase()
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  return alphabet.split('')
        .map(x => s.includes(x) ? '1' : '0')
        .join('')
}