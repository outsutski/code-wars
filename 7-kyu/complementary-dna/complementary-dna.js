function dnaStrand(dna){
  let s = dna.split('')
  return s.map(e => {
    if (e === 'A') return 'T'
    if (e === 'T') return 'A'
    if (e === 'C') return 'G'
    return 'C'
    })
    .join('')
}