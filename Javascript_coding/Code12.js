// how to swap two variables without using the third

// let a = 10;
// let b = 5;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a);
// console.log(b);

let a = 10;
let b = 5;

[a, b] = [b, a];

console.log(a);
console.log(b);
