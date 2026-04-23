function fiveLine(s) {
  s = s.trim();
  let currentLine = s;
  let result = [];
​
  for (let i = 1; i <= 5; i++) {
    result.push(currentLine);
    currentLine += s;
  }
​
  return result.join('\n');
}