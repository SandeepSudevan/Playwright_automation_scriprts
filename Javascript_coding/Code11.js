// how to find palindrome in javascript

const str = "Madam".toLowerCase();

const palindrome = str.split("").reduce((acc, char) => char + acc);

if (palindrome === str) console.log(`${str} is a palindrome`);
else console.log(`${str} is not a palindrome`);

// const str = "MADAMs".toLowerCase();
// let palindrome = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   palindrome += str[i];
// }

// if (palindrome === str) console.log(`${str} is a palindrome`);
// else console.log(`${str} is not a palindrome`);

// const str = "Madam".toLowerCase();

// const reversed = str.split("").reverse().join("");

// if (reversed === str) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a palindrome");
// }

// const str = "madam";
// let left = 0;
// let right = str.length - 1;

// let isPalindrome = true;

// while (left < right) {
//   if (str[left] !== str[right]) {
//     isPalindrome = false;
//     break;
//   }
//   left++;
//   right--;
// }

// console.log(isPalindrome ? "Palindrome" : "Not a palindrome");
