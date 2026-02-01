function closeCompare(a, b, margin = 0) {
  if (Math.abs(a - b) <= margin) {
    return 0;
  }
​
  return a < b ? -1 : 1;
}