// How To find max/min in a given array

const arr = [10, 50, 2, 98, 54, 258, 3];

// let max = arr[0];
// let min = arr[0];

// for (let arrNum of arr) {
//   if (arrNum > max) max = arrNum;
// }
// console.log(max);

// for (let arrNum of arr) {
//   if (arrNum < min) min = arrNum;
// }
// console.log(min);

const max = arr.reduce((a, b) => (a > b ? a : b));
const min = arr.reduce((a, b) => (a < b ? a : b));

console.log(max);
console.log(min);
