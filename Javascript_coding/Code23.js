// How to Check the No of Occurrence of Character in String

// const str = "gj6515rshsfyrserh hrryneeeeee 6656";
// const letter = "e";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === letter) {
//     count++;
//   }
// }

// count > 1
//   ? console.log(`${letter} repeats ${count} times`)
//   : console.log(`${letter} occurs only once`);

const str = "gj6515rshsfyrserh hrryneeeeee 6656";
const letter = "e";

const count = str.split("").reduce((acc, char) => {
  return char === letter ? acc + 1 : acc;
}, 0);

if (count === 0) {
  console.log(`${letter} does not occur`);
} else if (count === 1) {
  console.log(`${letter} occurs once`);
} else {
  console.log(`${letter} repeats ${count} times`);
}
