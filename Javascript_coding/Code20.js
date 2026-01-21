// how to convert first letter of string in uppercase
// const str = "sandeep";
// const strSlice = str.slice(1);

// const upperCase = str[0].toUpperCase();

// console.log(upperCase + strSlice);

const str = "hello world";

const result = str
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(result);
