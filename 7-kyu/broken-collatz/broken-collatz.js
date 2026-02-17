function collatz(n, count=1) {
  if (n <= 1) return count;
  let x = (n % 2 === 0) ? collatz(n / 2, count+1) : collatz(n * 3 + 1, count+1);
  return x;
}