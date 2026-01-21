// how to find vowels from string in javascript

const str = "h";
const vowel = "aeiou";
const answer = str.split("").filter((char) => vowel.includes(char));

console.log(answer);

// const str = "Hello World";
// const vowels = "aeiouAEIOU";
// const result = [];

// for (let char of str) {
//   if (vowels.includes(char)) {
//     result.push(char);
//   }
// }

// console.log(result);
