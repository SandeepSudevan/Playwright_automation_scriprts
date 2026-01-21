// how to find even or odd numbers in array in javascript

const arr = [1, 2, 5, 4, 22, 45, 78, 9, 85, 37, 58];

const even = [];
const odd = [];

for (let num of arr) {
  if (num % 2 === 0) {
    even.push(num);
  } else {
    odd.push(num);
  }
}

// console.log(even);
// console.log(odd);

// const even = arr.filter((num) => num % 2 === 0);
// const odd = arr.filter((num) => num % 2 !== 0);
// console.log(even);
// console.log(odd);

// const result = arr.reduce(
//   (acc, num) => {
//     if (num % 2 === 0) acc.even.push(num);
//     else acc.odd.push(num);
//     return acc;
//   },
//   { even: [], odd: [] }
// );

// console.log(result.even);
// console.log(result.odd);
