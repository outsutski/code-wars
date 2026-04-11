function chain(input, fs) {
  return fs.reduce((acc, currentFn) => {
    return currentFn(acc)
  }, input)
}
​