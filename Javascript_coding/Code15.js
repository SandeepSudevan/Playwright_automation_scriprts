// How to compare two Arrays are Equal or Not in JavaScript

// function arrCompare(arr1, arr2) {
//   // 1️⃣ Length check
//   if (arr1.length !== arr2.length) return false;

//   // 2️⃣ Sort copies (do NOT mutate originals)
//   const sortArr1 = [...arr1].sort((a, b) => a - b);
//   const sortArr2 = [...arr2].sort((a, b) => a - b);

//   // 3️⃣ Compare elements
//   for (let i = 0; i < sortArr1.length; i++) {
//     if (sortArr1[i] !== sortArr2[i]) {
//       return false;
//     }
//   }

//   // 4️⃣ If all elements match
//   return true;
// }

// console.log(arrCompare([1, 2, 3, 4, 5], [1, 2, 3, 5, 4])); // true

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 5, 4];
const isEqual =
  arr1.length === arr2.length &&
  arr1.every((value, index) => value === arr2[index]);

console.log(isEqual); // true
