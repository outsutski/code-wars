function enough(cap, on, wait) {
  let n = on + wait
  return n <= cap ? 0 : n-cap
}