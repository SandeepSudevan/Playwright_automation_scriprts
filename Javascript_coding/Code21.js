// how to find fibonacci sequence in javascript
const limit = 100;
let a = 0;
let b = 1;
let fib = [a, b];

while (true) {
  let next = a + b;
  if (next > limit) break;
  fib.push(next);
  a = b;
  b = next;
}

console.log(fib);
