// How to Find missing elements in a given Array 1 to 10

const arr = [1, 2, 3, 6, 8, 10, 15, 25];

let missArray = [];

for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
  if (!arr.includes(i)) missArray.push(i);
}

console.log(missArray);

// const set = new Set(arr);
// const missing = [];

// for (let i = 1; i <= 10; i++) {
//   if (!set.has(i)) {
//     missing.push(i);
//   }
// }

// console.log(missing);
