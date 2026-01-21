// how to find intersection of two arrays in javascript

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 5, 2, 6, 8, 7];

const intersection = [...new Set(arr1.filter((value) => arr2.includes(value)))];
console.log(intersection);
