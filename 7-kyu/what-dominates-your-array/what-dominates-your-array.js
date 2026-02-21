function dominator(arr) {
  const x = {};
  const b = arr.length / 2;
​
  for (const i of arr) {
    x[i] = (x[i] || 0) + 1;
​
    if (x[i] > b) {
      return i;
    }
  }
​
  return -1;
}