function check(a, x) {
  let v = a.find(a => x === a )
  return v != x ? false : true
}