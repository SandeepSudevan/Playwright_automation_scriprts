// how to reverse a string in Javascript

// const str = "Sandeep";

// const reverse = str.split("").reduce((acc, char) => char + acc);
// console.log(reverse);

const str = "Sandeep";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}

console.log(reverse);
